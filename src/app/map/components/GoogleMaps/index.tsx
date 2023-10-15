"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useMantineColorScheme, Image, Text } from "@mantine/core";
import { mapTheme, loader } from "~/utils";
import Calendar from "../Calendar";
import EventCard from "../EventCard";
import { useStyles } from "./styles";
// import { env } from "~/env.mjs";
import { type ModifiedResult } from "~/app/api/events/all/route";
import useFetchEvent from "~/hooks/useFetchEvent";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { trpc } from "~/providers";
import { useSession } from "next-auth/react";
import { convertLocaleTimeString } from "~/utils/date-converter";

export interface EventInterface {
  id: string;
  title: string;
  eventUrl: string;
  description: string;
  venue?: {
    id?: string;
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
  } | null;
  imageUrl: string;
  imageId: string;
  dateTime: string;
}

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
interface GoogleMapsProps {
  setMapLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GoogleMaps = ({ setMapLoaded }: GoogleMapsProps) => {
  const googleAPiKey = "AIzaSyCtX9hYFg7SLKTvB_tC1dopbk86g1wGD7E";
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  const { loading, error, result } = useFetchEvent<ModifiedResult[]>(
    null,
    date
  );

  const [infoWindowID, setInfoWindowID] = useState<string | null>(null);
  const [currentMarker, setCurrentMarker] = useState<JSX.Element | null>(null);
  const [markers, setMarkers] = useState<JSX.Element[]>([]); // Initialize as an empty array

  const Loadings = (
    <div className={classes.gifWrapper}>
      <Image
        width={150}
        height={150}
        mt={-80}
        src="/images/loading.gif"
        alt="loading"
      />
      <Text align="center" fz="sm" mt={15}>
        searching for <br />
        upcoming events <br />
        near you ...
      </Text>
    </div>
  );
  const { data: session } = useSession();

  const { mutate } = trpc.favoriteEvents.addFavorite.useMutation();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const handleAddFavEvent: (event: EventInterface) => void = useCallback(
    (event) => {
      const convertedDate = convertLocaleTimeString(event.dateTime);

      mutate({
        id: event.id,
        userId: session?.user.id as string,
        date: convertedDate,
      });
    },
    [mutate, session?.user.id]
  );

  useEffect(() => {
    const fetchMap = async () => {
      setMapLoaded(true);
      await loader.load();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentMarker(
            <Marker position={{ lat: latitude, lng: longitude }} />
          );

          setMapLoaded(false);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    };

    if (!loading && !error && result && result.length > 0) {
      void fetchMap();
    }
  }, [colorScheme, setMapLoaded, loading, error, result]);

  const [totalEvents, setTotalEvents] = useState(0);
  useEffect(() => {
    if (!loading && !error && result && result.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const markerElements = result?.map((event) => {
        return (
          event?.venue?.lat &&
          event?.venue?.lng && (
            <Marker
              key={event.id}
              position={{
                lat: event.venue.lat,
                lng: event.venue.lng,
              }}
              onClick={() => {
                setInfoWindowID(event.id);
              }}
              icon={{ url: "/images/marker.svg" }}
            >
              {infoWindowID === event.id && (
                <InfoWindow onCloseClick={() => setInfoWindowID(null)}>
                  <EventCard
                    event={event}
                    onClick={() => handleAddFavEvent(event)}
                  />
                </InfoWindow>
              )}
            </Marker>
          )
        );
      });
      setMarkers(markerElements as JSX.Element[]);
    }
  }, [loading, error, result, infoWindowID]);

  return (
    <div>
      <LoadScript
        googleMapsApiKey={googleAPiKey || ""}
        loadingElement={Loadings}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 49.2838, lng: -123.1193 }}
          zoom={13}
          options={{
            disableDefaultUI: true,
            styles: colorScheme === "dark" ? mapTheme.dark : mapTheme.light,
          }}
        >
          {currentMarker}
          {markers}
        </GoogleMap>
      </LoadScript>

      {noEvents && !loading ? (
        <div className={classes.overlay} onClick={toggleCard}>
          <Paper shadow="xs" p="xl" className={classes.popup}>
            <Text>There are no events on {date?.toDateString()}</Text>
          </Paper>
        </div>
      ) : events && !loading ? (
        <Paper shadow="xs" p="xl" className={classes.eventsPopup}>
          <Text>
            {totalEvents === 1
              ? `There is 1 tech event!`
              : `There are ${totalEvents} tech events!`}
          </Text>
        </Paper>
      ) : null}

      <div className={classes.container}>
        <Calendar date={date} setDate={setDate} />
      </div>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { mapTheme, loader } from "~/utils";
import Calendar from "../Calendar";
import EventCard from "../EventCard";
import { useStyles } from "./styles";

import { dummyData } from "../../event";
import { Image, Text } from "@mantine/core";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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

  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const [infoWindowID, setInfoWindowID] = useState<number | null>(null);
  const [currentMarker, setCurrentMarker] = useState<JSX.Element | null>(null);
  const [markers, setMarkers] = useState<JSX.Element[] | null>(null); // Initialize as an empty array
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
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

  useEffect(() => {
    const fetchMap = async () => {
      await loader.load();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 10,
            styles: colorScheme === "dark" ? mapTheme.dark : mapTheme.light,
          };
          setCurrentMarker(
            <Marker position={{ lat: latitude, lng: longitude }} />
          );

          if (dummyData !== null) {
            const markerElements = dummyData.map((event, i) => {
              const index = i + 1;
              return (
                event?.venue?.lat &&
                event?.venue?.lng && (
                  <Marker
                    key={index}
                    position={{
                      lat: event.venue.lat,
                      lng: event.venue.lng,
                    }}
                    onClick={() => {
                      setInfoWindowID(index);
                    }}
                    icon={{ url: "/images/marker.svg" }}
                  >
                    {infoWindowID === index && (
                      <InfoWindow>
                        <EventCard event={event} />
                      </InfoWindow>
                    )}
                  </Marker>
                )
              );
            });
            setMarkers(markerElements as JSX.Element[]);
          }

          setMapLoaded(true);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    };

    void fetchMap();
  }, [colorScheme, setMapLoaded, infoWindowID]);

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyBno3t41t6dGC-Krh57KQbKU_giH9XQwRU"
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

      <div className={classes.container}>
        <Calendar date={date} setDate={setDate} />
      </div>
    </div>
  );
};

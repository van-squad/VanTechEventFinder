"use client";

import React, { useState, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { mapTheme, loader } from "~/utils";
import Calendar from "../Calendar";
// import EventCard from "../EventCard";
import { useStyles } from "./styles";
import { dummyData } from "../../event";
import ReactDOMServer from "react-dom/server";
import { IconMapPin } from "@tabler/icons-react";
import { CloseButton, Group } from "@mantine/core";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { Button } from "~/components";
import { BUTTON_VARIANTS } from "~/components/Button";

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
interface GoogleMapsProps {
  setMapLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GoogleMaps = ({ setMapLoaded }: GoogleMapsProps) => {
  const [, setMap] = useState<google.maps.Map>();
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const [selectedEvent, setSelectedEvent] = useState<EventInterface | null>(
    null
  );

  const theme = useMantineTheme();

  useEffect(() => {
    const fetchMap = async () => {
      await loader.load().then(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const mapOptions = {
              center: { lat: latitude, lng: longitude },
              zoom: 16,
              styles: colorScheme === "dark" ? mapTheme.dark : mapTheme.light,
            };

            const newMap = new window.google.maps.Map(
              document.getElementById("map") as HTMLElement,
              mapOptions
            );

            new window.google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: newMap,
            });

            dummyData.forEach((event) => {
              const eventMarker = new google.maps.Marker({
                position:
                  event.venue?.lat && event.venue?.lng
                    ? { lat: event.venue.lat, lng: event.venue.lng }
                    : null,
                map: newMap,
                // to add the marker
                icon: {
                  url: "/images/marker.svg",
                  scaledSize: new google.maps.Size(60, 60), 
                },
              });

              const infoWindow = new google.maps.InfoWindow();
              {
                event.venue?.lat &&
                  event.venue?.lng &&
                  infoWindow.setPosition({
                    lat: event.venue?.lat,
                    lng: event.venue?.lng,
                  });
              }
              infoWindow.setOptions({
                pixelOffset: new google.maps.Size(0, -50),
              });

              eventMarker.addListener("click", () => {
                setSelectedEvent(event);
                const eventCardHtml = ReactDOMServer.renderToString(
                  <div className={classes.card}>
                    <Flex direction="column" align="center" p={30}>
                      <Image
                        src={
                          event?.imageUrl && event?.imageId
                            ? `${event.imageUrl}${event.imageId}/676x380.webp`
                            : undefined
                        }
                        alt={event?.title}
                        width="100%"
                        height={120}
                      />
                      <Container fz="xs" p={0}>
                        <Text fw="bold" color={theme.colors.red[0]} mt={15}>
                          {event?.dateTime}
                        </Text>
                        <Text fz="lg" fw="bold" mb={2}>
                          {event?.title}
                        </Text>
                        <Text color="#999" lh={1}>
                          <Flex align="center">
                            <IconMapPin size="1rem" stroke={1.5} />
                            {event?.venue?.name}
                          </Flex>
                        </Text>
                        <Text mt={10} lineClamp={3}>
                          {event?.description}
                        </Text>
                      </Container>
                      {event?.eventUrl && (
                        <Link target="_blank" href={event.eventUrl}>
                          <Button
                            mt={15}
                            buttonType={BUTTON_VARIANTS.SECONDARY}
                          >
                            View Details
                          </Button>
                        </Link>
                      )}
                    </Flex>
                  </div>
                );
                infoWindow.setContent(eventCardHtml);
                // Open the InfoWindow at the marker's position
                infoWindow.open(newMap, eventMarker);
              });
            });

            setMap(newMap);
            setMapLoaded(true);
          },
          (error) => {
            console.error("Error getting current location:", error);
            const mapOptions = {
              center: { lat: 49.2838, lng: -123.1193 },
              zoom: 16,
              styles: colorScheme === "dark" ? mapTheme.dark : mapTheme.light,
            };
            const newMap = new window.google.maps.Map(
              document.getElementById("map") as HTMLElement,
              mapOptions
            );

            setMap(newMap);
          }
        );
      });
    };

    void fetchMap();
  }, [colorScheme, setMapLoaded]);

  return (
    <div className={classes.wrapper}>
      <div id="map" className={classes.googleMap}></div>
      <div className={classes.container}>
        <Calendar date={date} setDate={setDate} />
      </div>
    </div>
  );
};

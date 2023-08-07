"use client";

import { useState, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { mapTheme, loader } from "~/utils";
import Calendar from "../Calendar";
import { useStyles } from "./styles";

export const GoogleMaps = () => {
  const [, setMap] = useState<google.maps.Map>();
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

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

            setMap(newMap);
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
  }, [colorScheme]);

  return (
    <div className={classes.wrapper}>
      <div id="map" className={classes.googleMap}></div>
      <div className={classes.container}>
        <Calendar date={date} setDate={setDate} />
      </div>
    </div>
  );
};

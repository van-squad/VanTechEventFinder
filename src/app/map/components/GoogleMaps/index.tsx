"use client";

import { useState, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { mapTheme, loader } from "~/utils";

export const GoogleMaps = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const { colorScheme } = useMantineColorScheme();

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

  return <div id="map" style={{ height: "calc(100vh - 9.5rem)", width: "100%" }}></div>;
};

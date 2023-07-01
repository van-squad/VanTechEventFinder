"use client";

import { useState, useEffect } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { mapTheme, loader } from "~/utils";

interface GoogleMapProps {
  address: string;
}

export const GoogleMaps = ({ address }: GoogleMapProps) => {
  const [map, setMap] = useState<google.maps.Map>();
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    const fetchMap = async () => {
      await loader.load().then(async () => {
        const geocoder = new window.google.maps.Geocoder();
        await geocoder.geocode({ address }, (results, status) => {
          if (status === "OK" && results !== null) {
            const mapOptions = {
              center: results[0]?.geometry.location,
              zoom: 16,
              styles: colorScheme == "dark" ? mapTheme.dark : mapTheme.light,
            };

            const newMap = new window.google.maps.Map(
              document.getElementById("map") as HTMLElement,
              mapOptions
            );

            const marker = new window.google.maps.Marker({
              position: results[0]?.geometry.location,
              map: newMap,
            });

            setMap(newMap);
          }
        });
      });
    };

    void fetchMap();
  }, [address, colorScheme]);

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
};

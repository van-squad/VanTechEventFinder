"use client";

import { useState, useEffect } from "react";
import loader from "~/utils/googleMapsLoader";

interface GoogleMapProps {
  address: string;
}

const GoogleMap = ({ address }: GoogleMapProps) => {
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    const fetchMap = async () => {
      await loader.load().then(async () => {
        const geocoder = new window.google.maps.Geocoder();
        await geocoder.geocode({ address }, (results, status) => {
          console.log(results, status);
          if (status === "OK" && results !== null) {
            const mapOptions = {
              center: results[0]?.geometry.location,
              zoom: 16,
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
  }, [address]);

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
};
export default GoogleMap;

"use client";

import { GoogleMaps } from "./components";
import { useState } from "react";

const MapPage = () => {
  const [, setIsLoading] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  setInterval(() => {
    mapLoaded && setIsLoading(false);
  }, 2000);

  return (
    <>
      <GoogleMaps setMapLoaded={setMapLoaded} />
    </>
  );
};

export default MapPage;

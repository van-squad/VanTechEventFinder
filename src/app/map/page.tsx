"use client";

import { GoogleMaps } from "./components";
import { Loading } from "./components/Loading";
import { useState } from "react";

const MapPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  setInterval(() => {
    mapLoaded && setIsLoading(false);
  }, 2000);

  return (
    <>
      {isLoading && <Loading />}
      <GoogleMaps setMapLoaded={setMapLoaded} />
    </>
  );
};

export default MapPage;

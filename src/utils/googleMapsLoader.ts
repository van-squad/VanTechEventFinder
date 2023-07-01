import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  version: "weekly",
  libraries: ["places"],
});

export default loader;

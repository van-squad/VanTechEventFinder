import { Loader } from "@googlemaps/js-api-loader";

export const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  version: "weekly",
  libraries: ["places"],
});

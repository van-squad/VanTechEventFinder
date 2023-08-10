import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Map",
};

const MapLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MapLayout;

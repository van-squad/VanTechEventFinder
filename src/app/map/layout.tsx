import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Vancouver's Tech Events on the Interactive Map",
  description:
    "Navigate through Vancouver's tech meetups with our interactive map page. Discover an array of tech meetups happening throughout the city. Filter events by date, explore detailed information, and plan your attendance. Whether you're a seasoned tech professional or a curious enthusiast, our map page is your gateway to connecting with the latest tech happenings in Vancouver. Embark on an immersive journey of exploration and networking by browsing events by date on the map!",
};

const MapLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MapLayout;

import { type Metadata } from "next";
import { TrpcProvider } from "~/providers";

export const metadata: Metadata = {
  title: "Your TechMeet Favorites: Curate Your Vancouver Event Journey",
  description:
    "Welcome to your TechMeet Favorites page, where you have the power to curate your personalized event journey in Vancouver's tech scene. Browse through the tech meetups you've discovered on the map and add them to your favorites list! Build your own collection of must-attend meetups! Stay organized and stay connected with the events that matter most to you. Start building your tailored Vancouver tech event experience today!",
};

const FavListLayout = ({ children }: { children: React.ReactNode }) => {
  return <TrpcProvider>{children}</TrpcProvider>;
};

export default FavListLayout;

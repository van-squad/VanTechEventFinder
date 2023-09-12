import { type Metadata } from "next";
export const metadata: Metadata = {
  title: "Log in to Add Your Favorite Tech Meetup Events!",
  description:
    "Log in to your account to add new meetup events to your favorite list!  Your journey into Vancouver's thriving tech community starts here. ",
};
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;

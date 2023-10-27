import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Event List: Find Your Vancouver Event",
  description:
    "Dive into Vancouver's tech vibes with VantechEventFinder! 🚀 Your online & offline events for all things techy in the city. From casual meetup to hands-on workshops, we've got the lowdown on the coolest events. Connect with tech pros, boost your skills, and be part of Vancouver's tech buzz. Ready for your next tech adventure? Let's do this! ",
};

const EventListLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default EventListLayout;

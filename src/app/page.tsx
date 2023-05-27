import Link from "next/link";
import Button from "~/clients/components/Button";
import Text from "~/clients/components/Text";

const HomePage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center">
        <Text fz="lg" fw={700} mb={10}>
          Tech Meetup Map 👋
        </Text>
        <Text fw={500} mb={20} maw={380} ta="center">
          Looking for a way to stay up-to-date on the latest tech meetups
          happening in Vancouver? This app displays all upcoming tech events in
          Vancouver, and you can search for events by date.
        </Text>
        <Link href={`/map`}>
          <Button>Find Events</Button>
        </Link>
      </main>
    </>
  );
};

export default HomePage;

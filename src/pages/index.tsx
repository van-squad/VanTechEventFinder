import { type NextPage } from "next";
import { SEO } from "~/components/SEO";
import { Button, Text } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Intro" />
      <main className="flex h-screen flex-col items-center justify-center">
        <Text fz="lg" fw={700} mb={20}>
          Tech Meetup Map 👋
        </Text>
        <Button>Find Events</Button>
      </main>
    </>
  );
};

export default Home;

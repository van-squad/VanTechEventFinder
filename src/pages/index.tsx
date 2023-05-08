import { type NextPage } from "next";
import Head from "next/head";
import { Button, Text } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

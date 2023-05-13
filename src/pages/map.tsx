import { type NextPage } from "next";
import { Button, Text } from "@mantine/core";
import { SEO } from "~/components/SEO";
import Link from "next/link";

const MapPage: NextPage = () => {
  return (
    <>
      <SEO title="Map" />
      <main className="flex h-screen flex-col items-center justify-center">
        <Text fz="lg" fw={700} mb={20}>
          Map Page
        </Text>
        <Link href={`/`}>
          <Button variant="light">Back Home</Button>
        </Link>
      </main>
    </>
  );
};

export default MapPage;

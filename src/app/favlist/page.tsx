"use client";
import { Text } from "@mantine/core";
import { trpc } from "~/providers";
import { useSession } from "next-auth/react";
import { useStyles } from "./styles";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import FavList from "./compoments/List/FavList";

const FavPage = () => {
  const { classes } = useStyles();
  const { data: session } = useSession();
  const userId =
    session !== undefined
      ? (session?.user.id as string)
      : "clnmccmc10000d7yggv9xdolo";
  const favEvents = trpc.favoriteEvents.getFavorites.useQuery({
    userId,
  });

  const eventIds = favEvents.data
    // sort favEvents in the order of timeline
    ?.sort((a, b) => (a.date > b.date ? 1 : -1))
    .map((event) => {
      return event.id;
    });

  useEffect(() => {
    if (!session) redirect("/login");
  }, [session]);

  if (favEvents.isFetching) {
    return <div className={classes.container}>Loading...</div>;
  }
  return (
    <div className={classes.container}>
      {(favEvents.data === undefined || favEvents.data.length === 0) && (
        <Text>No fav events found.</Text>
      )}
      <FavList eventIds={eventIds ? eventIds : []} />
    </div>
  );
};

export default FavPage;

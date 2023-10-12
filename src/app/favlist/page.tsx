"use client";
import { Text } from "@mantine/core";
// import { Card } from "./compoments";
import { trpc } from "~/providers";
import { useSession } from "next-auth/react";
import { useStyles } from "./styles";
import { redirect } from "next/navigation";
import { useCallback, useEffect } from "react";

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

  const { mutate } = trpc.favoriteEvents.deleteFavorite.useMutation();

  const handleDeleteFavEvent: (id: string) => void = useCallback(
    (id) => {
      mutate({
        id,
      });
    },
    [mutate]
  );

  useEffect(() => {
    console.log("session: ", session);
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
      <Text fz="lg" fw={700} mb={20}>
        Your Favorite Tech Events
      </Text>
      {favEvents.data?.map((d) => {
        return (
          <div key={d.id}>
            <p>{d.id}</p>
            <p>{d.userId}</p>
            <button onClick={() => handleDeleteFavEvent(d.id)}>Delete</button>
          </div>
        );
      })}
      {/* <Text>{data?.greeting}</Text> */}
      {/* <Card
        title="Coffee.js"
        date="SAT, MAY, 13, 2023, 12:00 PM PDT"
        location="The Golden Horn Turkish Bakery & Cafe"
        description="Join us a regular monthly social for JavaScript enthusiasts. Whether you're a seasoned JavaScript developer or just starting out, Coffee.js is the perfect opportunity to network with like-minded individuals, share your ideas and learn from others."
        imageUrl="https://secure.meetupstatic.com/photos/event/c/7/2/3/clean_511430979.jpeg"
        website="https://www.meetup.com/vancouver-javascript-developers/events/292653989/"
      />
      <Card
        title="test.js"
        date="SAT, MAY, 13, 2023, 12:00 PM PDT"
        location="The Golden Horn Turkish Bakery & Cafe"
        description="Join us a regular monthly social for JavaScript enthusiasts. Whether you're a seasoned JavaScript developer or just starting out, Coffee.js is the perfect opportunity to network with like-minded individuals, share your ideas and learn from others."
        imageUrl="https://secure.meetupstatic.com/photos/event/c/7/2/3/clean_511430979.jpeg"
        website="https://www.meetup.com/vancouver-javascript-developers/events/292653989/"
      /> */}
    </div>
  );
};

export default FavPage;

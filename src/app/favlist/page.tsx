"use client";
import { Text } from "@mantine/core";
// import { Card } from "./compoments";
// import { trpc } from "~/providers";
import { useSession } from "next-auth/react";
import { useStyles } from "./styles";
// import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const FavPage = () => {
  const { classes } = useStyles();
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    if (!session) redirect("/login");
  }, [session]);
  // fetch users' fav events
  // const { data, isFetching } = trpc.favoriteEvents.getFavorites.useQuery({
  //   userId: "1",
  // });
  // if (isFetching) return <div className={classes.container}>Loading...</div>;
  return (
    <div className={classes.container}>
      <Text fz="lg" fw={700} mb={20}>
        Your Favorite Tech Events
      </Text>
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

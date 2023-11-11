"use client";
import { type Session } from "next-auth";
import { useStyles } from "../styles";
import { trpc } from "~/providers";
import { useEffect, useState } from "react";
import type { ModifiedResult } from "~/app/api/events/all/route";
import { EventListCard } from "~/app/(events)/components";
import { redirect } from "next/navigation";
import { Text } from "@mantine/core";

const ClientFavListPage = ({ session }: { session: Session | null }) => {
  const { classes } = useStyles();

  const [eventArr, setEventArr] = useState<ModifiedResult[] | null>(null);

  const favEvents = trpc.favoriteEvents.getFavorites.useQuery({
    userId: session?.user.id ?? "",
  });

  const eventIds = favEvents.data?.map((event) => {
    return event.id;
  });

  useEffect(() => {
    const fetchData = async () => {
      const arr: ModifiedResult[] = [];
      try {
        for await (const id of eventIds || []) {
          const response = await fetch(`/api/events/id?id=${id}`);
          const data = (await response.json()) as ModifiedResult;
          arr.push(data);
        }
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        return message;
      } finally {
        setEventArr(arr);
      }
    };
    void fetchData();

    if (!session) redirect("/login");
  }, [eventIds, session]);

  if (favEvents.isFetching || !eventArr)
    return <div className={classes.container}>Loading...</div>;

  return (
    <div className={classes.container}>
      <Text fz="lg" fw={700} mb={20} className={classes.text}>
        Your Favorite Tech Events
      </Text>

      {eventArr.map((event) => (
        <EventListCard key={event.id} event={event} cardName="DELETE" />
      ))}
    </div>
  );
};

export default ClientFavListPage;

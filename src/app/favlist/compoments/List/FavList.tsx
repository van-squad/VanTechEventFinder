import { Text } from "@mantine/core";
import { useEffect, useState, useCallback } from "react";
import { trpc } from "~/providers";
import EventCard from "~/app/components/Card";
import type { ModifiedResult } from "~/app/api/events/all/route";
import { useStyles } from "./styles";

interface FavLisrtProps {
  eventIds: Array<string>;
}

const FavList: React.FC<FavLisrtProps> = ({ eventIds }) => {
  const [eventArr, setEventArr] = useState<ModifiedResult[] | null>(null);
  const { classes } = useStyles();

  const { mutate } = trpc.favoriteEvents.deleteFavorite.useMutation();

  const handleDeleteFavEvent: (event: ModifiedResult) => void = useCallback(
    (event) => {
      mutate({
        id: event.id,
      });
    },
    [mutate]
  );

  useEffect(() => {
    const fetchData = async () => {
      const arr: ModifiedResult[] = [];
      try {
        for await (const id of eventIds) {
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
  }, [eventIds]);

  if (!eventArr) return <div>Loading...</div>;

  return (
    <>
      <Text fz="lg" fw={700} mb={20} className={classes.title}>
        Your Favorite Tech Events
      </Text>
      {eventArr.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            cardName={"DELETE"}
            onClick={handleDeleteFavEvent}
          />
        );
      })}
    </>
  );
};

export default FavList;

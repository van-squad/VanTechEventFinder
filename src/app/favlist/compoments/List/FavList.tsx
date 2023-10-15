import { Text } from "@mantine/core";
import { useStyles } from "../../styles";
import { useEffect, useState, useCallback } from "react";
import { Card } from "../Card";
import type { EventInterface } from "~/app/map/components/GoogleMaps";
import { trpc } from "~/providers";

interface FavLisrtProps {
  eventIds: Array<string>;
}

const FavList: React.FC<FavLisrtProps> = ({ eventIds }) => {
  const [eventArr, setEventArr] = useState<EventInterface[]>([]);
  const { classes } = useStyles();

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
    const fetchData = async () => {
      const arr: EventInterface[] = [];
      try {
        for await (const id of eventIds) {
          const response = await fetch(`/api/events/id?id=${id}`);
          const data = (await response.json()) as EventInterface;
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

  if (eventArr.length === 0)
    return <div className={classes.container}>Loading...</div>;

  return (
    <div>
      <Text fz="lg" fw={700} mb={20}>
        Your Favorite Tech Events
      </Text>
      {eventArr.map((event) => {
        return (
          <Card
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.dateTime}
            location={event?.venue?.name ? event.venue.name : ""}
            description={event.description}
            imageUrl={`${event.imageUrl}${event.imageId}/676x380.webp`}
            website={event.eventUrl}
            onClick={handleDeleteFavEvent}
          />
        );
      })}
    </div>
  );
};

export default FavList;

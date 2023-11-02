"use client";
import { useState, useCallback } from "react";
import { Text } from "@mantine/core";
import { useStyles } from "./styles";
import Calendar from "../components/Calendar";
import EventItem from "./compoments/EventItem";
import { Button, BUTTON_VARIANTS } from "~/app/components";
import useFetchEvent from "~/hooks/useFetchEvent";
import { type ModifiedResult } from "~/app/api/events/all/route";
import { trpc } from "~/providers";
import { useSession } from "next-auth/react";
import { convertLocaleTimeString } from "~/utils/date-converter";

export interface EventInterface {
  id: string;
  title: string;
  eventUrl: string;
  description: string;
  venue?: {
    id?: string;
    name?: string;
    address?: string;
    lat?: number;
    lng?: number;
  } | null;
  imageUrl: string;
  imageId: string;
  dateTime: string;
}

const EventListPage = () => {
  const { classes } = useStyles();
  const [date, setDate] = useState<Date | null>(new Date(Date.now()));
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const { loading, error, result } = useFetchEvent<ModifiedResult[]>(
    null,
    date,
    false
  );
  const stringDate = date?.toLocaleString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const hasResult = !loading && !error && result && result?.length > 0;
  const noResult = !loading && !error && result?.length === 0;

   const { data: session } = useSession();

   const { mutate } = trpc.favoriteEvents.addFavorite.useMutation();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const handleAddFavEvent: (event: EventInterface) => void = useCallback(
      (event) => {
        const convertedDate = convertLocaleTimeString(event.dateTime);

        mutate({
          id: event.id,
          userId: session?.user.id as string,
          date: convertedDate,
        });
      },
      [mutate, session?.user.id]
    );

  return (
    <div className={classes.container}>
      <Text fz="lg" fw={700} mb={20}>
        Find your tech events in Vancouver
      </Text>

      <div className={classes.calendarContainer}>
        <Button
          buttonType={BUTTON_VARIANTS.PRIMARY}
          name={`${showCalendar ? "Hide" : "Show"} Calendar`}
          onClick={() => setShowCalendar(!showCalendar)}
        />
        {showCalendar && (
          <>
            <Calendar date={date} setDate={setDate} />
          </>
        )}
      </div>
      {loading && <Text>Loading...</Text>}
      {error && <Text>⚠️ Failed to fetch data!</Text>}
      {noResult && (
        <Text>
          There are no events on {stringDate}. Please try another date!
        </Text>
      )}

      {hasResult &&
        result.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onClick={() => handleAddFavEvent(event)}
          />
        ))}
    </div>
  );
};

export default EventListPage;

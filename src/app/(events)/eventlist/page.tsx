"use client";
import { useState } from "react";
import { Text } from "@mantine/core";
import { useStyles } from "./styles";
import { Calendar, EventListCard } from "../components";
import { Button, BUTTON_VARIANTS } from "~/app/components";
import useFetchEvent from "~/hooks/useFetchEvent";
import { type ModifiedResult } from "~/app/api/events/all/route";
import { IconCheck } from "@tabler/icons-react";
import { Notification, rem } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";

const EventListPage = () => {
  const [eventAdded, setEventAdded] = useState(false);
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
  const { colorScheme } = useMantineColorScheme();
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
          <EventListCard
            key={event.id}
            event={event}
            cardName="ADD"
            setEventAdded={setEventAdded}
          />
        ))}

      {eventAdded && (
        <div className={classes.overlay}>
          <Notification
            style={{ padding: "3rem" }}
            className={classes.notification}
            onClick={() => setEventAdded(false)}
            icon={checkIcon}
            color="teal"
            title=" The event is added to your favorites list!"
            closeButtonProps={{
              color: colorScheme === "dark" ? "gray" : "dark",
            }}
          ></Notification>
        </div>
      )}
    </div>
  );
};

export default EventListPage;

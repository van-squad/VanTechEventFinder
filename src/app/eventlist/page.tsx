"use client";
import { Text } from "@mantine/core";
import { useStyles } from "./styles";
import { dummyData } from "../map/event";
import EventItem from "./compoments/EventItem";

const EventListPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Text fz="lg" fw={700} mb={20}>
        Find your tech events in Vancouver
      </Text>
      {dummyData.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventListPage;

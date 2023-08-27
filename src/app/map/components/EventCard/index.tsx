"use client";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import type { Event } from "~/types";
import { Button } from "~/components";
import { IconMapPin } from "@tabler/icons-react";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.card}>
      <Flex direction="column" align="center" p={30}>
        <Image
          src={event.imageUrl}
          alt={event.title}
          width="100%"
          height={120}
        />
        <Container fz="xs" p={0}>
          <Text fw="bold" color={theme.colors.red[0]} mt={15}>
            {event.date}
          </Text>
          <Text fz="lg" fw="bold" mb={2}>
            {event.title}
          </Text>
          <Text color="#999" lh={1}>
            <Flex align="center">
              <IconMapPin size="1rem" stroke={1.5} />
              {event.location}
            </Flex>
          </Text>
          <Text mt={10} lineClamp={3}>
            {event.description}
          </Text>
        </Container>
        <Button mt={15} buttonType="secondary">
          View Details
        </Button>
      </Flex>
    </div>
  );
};

export default EventCard;

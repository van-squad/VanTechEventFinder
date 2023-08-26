"use client";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import Link from "next/link";
import { Button } from "~/components";
import { IconMapPin } from "@tabler/icons-react";
import { CloseButton, Group } from "@mantine/core";
import { EventInterface } from "../GoogleMaps";


interface EventCardProps {
  event: EventInterface | null;
  onClose: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClose }) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.card}>
      <Flex direction="column" align="center" p={30}>
        <Image
          src={
            event?.imageUrl && event?.imageId
              ? `${event.imageUrl}${event.imageId}/676x380.webp`
              : undefined
          }
          alt={event?.title}
          width="100%"
          height={120}
        />
        <Container fz="xs" p={0}>
          <Text fw="bold" color={theme.colors.red[0]} mt={15}>
            {event?.dateTime}
          </Text>
          <Text fz="lg" fw="bold" mb={2}>
            {event?.title}
          </Text>
          <Text color="#999" lh={1}>
            <Flex align="center">
              <IconMapPin size="1rem" stroke={1.5} />
              {event?.venue?.name}
            </Flex>
          </Text>
          <Text mt={10} lineClamp={3}>
            {event?.description}
          </Text>
        </Container>
        {event?.eventUrl && (
          <Link target="_blank" href={event.eventUrl}>
            <Button mt={15} buttonType="secondary">
              View Details
            </Button>
          </Link>
        )}
      </Flex>
    </div>
  );
};

export default EventCard;

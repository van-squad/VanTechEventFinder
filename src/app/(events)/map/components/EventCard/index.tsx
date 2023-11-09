"use client";
import Link from "next/link";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import { IconMapPin } from "@tabler/icons-react";
import { Button } from "~/app/components";
import { type EventInterface } from "../GoogleMaps";
import { useSession } from "next-auth/react";
import { ActionIcon } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";

interface EventCardProps {
  event: EventInterface;
  onClick: (event: EventInterface) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { data: session } = useSession();

  return (
    <div className={classes.card}>
      <Flex direction="column" align="center" p={30}>
        <Container style={{ position: "relative" }}>
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
          {session && (
            <ActionIcon
              className={classes.favIcon}
              onClick={() => onClick(event)}
            >
              <IconHeart fill="#ee6c4d" stroke="#ee6c4d" />
            </ActionIcon>
          )}
        </Container>

        <Container fz="xs" p={0}>
          <Text fw="bold" color={theme.colors.red[0]} mt={15}>
            {event.dateTime}
          </Text>
          <Text fz="lg" fw="bold" mb={2}>
            {event?.title}
          </Text>
          <Text color="#999" lh={1}>
            <Flex align="center">
              <IconMapPin size="1rem" stroke={1.5} />
              {event?.venue?.address}
            </Flex>
          </Text>
          <Text mt={10} lineClamp={3}>
            {event?.description}
          </Text>
        </Container>
        <Flex justify="center" align="center" mt={10}>
          {event?.eventUrl && (
            <Link target="_blank" href={event.eventUrl}>
              <Button name="View Details" buttonType="secondary"></Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default EventCard;

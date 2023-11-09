"use client";
import Link from "next/link";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import { IconMapPin } from "@tabler/icons-react";
import { Button } from "~/app/components";
import { type ModifiedResult } from "~/app/api/events/all/route";
import { ActionIcon } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

interface EventItemProps {
  event: ModifiedResult;
  onClick: (event: ModifiedResult) => void;
}

const EventItem: React.FC<EventItemProps> = ({ event, onClick }) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { data: session } = useSession();
  return (
    <div className={classes.eventCard}>
      <Flex className={classes.inner}>
        <Container className={classes.innerContainer} fz="xs" pl={15}>
          <Text fw="bold" color={theme.colors.red[0]} mt={3}>
            {event.dateTime}
          </Text>
          <Text fz="lg" fw="bold" mb={2}>
            {event?.title}
          </Text>
          <Text color="#999" lh={1}>
            <Flex align="center">
              <IconMapPin size="1rem" stroke={1.5} />
              {event?.venue?.name === "Online event"
                ? event.venue.name
                : event.venue?.address}
            </Flex>
          </Text>
          <Text mt={10} lineClamp={3}>
            {event?.description}
          </Text>
        </Container>
        <Container className={classes.innerContainer}>
          <Image
            src={
              event?.imageUrl && event?.imageId
                ? `${event.imageUrl}${event.imageId}/676x380.webp`
                : undefined
            }
            alt={event?.title}
            className={classes.image}
          />
          {session && (
            <ActionIcon
              onClick={() => onClick(event)}
              className={classes.favIcon}
            >
              <IconHeart fill="#ee6c4d" stroke="#ee6c4d" />
            </ActionIcon>
          )}
          {event?.eventUrl && (
            <Link target="_blank" href={event.eventUrl} className={classes.btn}>
              <Button name="View Details" buttonType="secondary" />
            </Link>
          )}
        </Container>
      </Flex>
    </div>
  );
};

export default EventItem;

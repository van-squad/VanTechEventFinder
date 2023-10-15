"use client";
import Link from "next/link";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import { IconMapPin } from "@tabler/icons-react";
import { Button } from "~/app/components";
import { type ModifiedResult } from "~/app/api/events/all/route";

interface EventItemProps {
  event: ModifiedResult;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.eventCard}>
      <Flex className={classes.inner}>
        <Container fz="xs" pl={15} w="53%">
          <Text fw="bold" color={theme.colors.red[0]} mt={3}>
            {event.dateTime}
          </Text>
          <Text fz="lg" fw="bold" mb={2}>
            {event?.title}
          </Text>
          <Text color="#999" lh={1}>
            <Flex align="center">
              <IconMapPin size="1rem" stroke={1.5} />
              {event.venue.address}
            </Flex>
          </Text>
          <Text mt={10} lineClamp={3}>
            {event?.description}
          </Text>
        </Container>
        <Container w="47%">
          <Image
            src={
              event?.imageUrl && event?.imageId
                ? `${event.imageUrl}${event.imageId}/676x380.webp`
                : undefined
            }
            alt={event?.title}
            width="100%"
            height={160}
          />
          {event?.eventUrl && (
            <Link target="_blank" href={event.eventUrl} className={classes.btn}>
              <Button name="View Details" mt={15} buttonType="secondary" />
            </Link>
          )}
        </Container>
      </Flex>
    </div>
  );
};

export default EventItem;

"use client";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import { IconMapPin } from "@tabler/icons-react";
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
      <Container className={classes.inner}>
        <Flex>
          <Container w="55%" className={classes.contents}>
            <Text fw="bold" color={theme.colors.red[0]} mt={3}>
              {event.dateTime}
            </Text>
            <Text fz="lg" fw="bold" mb={2} lineClamp={2}>
              {event?.title}
            </Text>
            <Text color="#999" lh={1}>
              <Flex align="center">
                <IconMapPin size="1rem" stroke={1.5} />
                {event?.venue?.name === "Online event"
                  ? event.venue.name
                  : event.venue.address}
              </Flex>
            </Text>

            <Text size="sm" lineClamp={3} mt={10}>
              {event?.description}
            </Text>
          </Container>

          <Container w="45%">
            <Image
              src={
                event?.imageUrl && event?.imageId
                  ? `${event.imageUrl}${event.imageId}/676x380.webp`
                  : undefined
              }
              alt={event?.title}
              className={classes.image}
              mt={10}
            />

            {session && (
              <ActionIcon
                onClick={() => onClick(event)}
                className={classes.favIcon}
              >
                <IconHeart fill="#ee6c4d" stroke="#ee6c4d" />
              </ActionIcon>
            )}
          </Container>
        </Flex>
      </Container>
    </div>
  );
};

export default EventItem;

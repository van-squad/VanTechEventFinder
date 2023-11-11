"use client";
import { Container, Flex, Text, Image, useMantineTheme } from "@mantine/core";
import { useStyles } from "./styles";
import { IconMapPin } from "@tabler/icons-react";
import { type ModifiedResult } from "~/app/api/events/all/route";
import { ActionIcon } from "@mantine/core";
import { useSession } from "next-auth/react";
import { IconHeart } from "@tabler/icons-react";
import { BiTrash } from "react-icons/bi";
import Link from "next/link";
import { useCallback } from "react";
import { trpc } from "~/providers";
import { convertLocaleTimeString } from "~/utils/date-converter";
import type { EventList } from "~/types";

type CardNameType = "ADD" | "DELETE";

interface EventListCardProps {
  event: ModifiedResult;
  cardName: CardNameType;
  setEventAdded?: (b: boolean) => void;
}

const EventListCard: React.FC<EventListCardProps> = ({
  event,
  cardName,
  setEventAdded,
}) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const { data: session } = useSession();

  const { mutate: mutateAdd } = trpc.favoriteEvents.addFavorite.useMutation();

  const { mutate: mutateDelete } =
    trpc.favoriteEvents.deleteFavorite.useMutation();

  const handleAddFavEvent: (event: EventList) => void = useCallback(
    (event) => {
      const convertedDate = convertLocaleTimeString(event.dateTime);
      setEventAdded && setEventAdded(true);
      mutateAdd({
        id: event.id,
        userId: session?.user.id as string,
        date: convertedDate,
      });
    },
    [setEventAdded, mutateAdd, session?.user.id]
  );

  const handleDeleteFavEvent: (event: ModifiedResult) => void = useCallback(
    (event) => {
      mutateDelete({
        id: event.id,
      });
    },
    [mutateDelete]
  );

  const onClickIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    cardName === "ADD" ? handleAddFavEvent(event) : handleDeleteFavEvent(event);
  };

  return (
    <Link
      className={classes.eventCard}
      href={event?.eventUrl ? event.eventUrl : "#"}
      target="_blank"
    >
      <Container className={classes.inner}>
        <Flex>
          <Container fz="sm" w="55%" className={classes.contents}>
            <Container p={0} mih="3px">
              <Text fz="xs" fw="bold" color={theme.colors.red[0]} mt={3}>
                {event.dateTime}
              </Text>
              <Text fz="lg" fw="bold" mb={2} lineClamp={2}>
                {event?.title}
              </Text>
              <Text color="#999" lh={1}>
                <Flex align="center">
                  <IconMapPin size="1rem" stroke={1.5} />
                  {event?.venue?.name === "Online event"
                    ? event.venue?.name
                    : event.venue?.address}
                </Flex>
              </Text>
            </Container>

            <Text lineClamp={3} mt={10}>
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
                className={classes.icon}
                onClick={(e) => onClickIcon(e)}
              >
                {cardName === "ADD" ? (
                  <IconHeart fill="#ee6c4d" stroke="#ee6c4d" />
                ) : (
                  <BiTrash fill="#555" />
                )}
              </ActionIcon>
            )}
          </Container>
        </Flex>
      </Container>
    </Link>
  );
};

export default EventListCard;

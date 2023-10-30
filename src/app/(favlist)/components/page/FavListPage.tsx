"use client";
import { type Session } from "next-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useStyles } from "../../favlist/styles";
import { trpc } from "~/providers";
import FavList from "../List/FavList";

const FavListPage = ({ session }: { session: Session | null }) => {
  const { classes } = useStyles();
  const favEvents = trpc.favoriteEvents.getFavorites.useQuery({
    userId: session?.user.id ?? "",
  });
  const eventIds = favEvents.data?.map((event) => {
    return event.id;
  });
  useEffect(() => {
    if (!session) redirect("/login");
  }, [session]);

  if (favEvents.isFetching) {
    return <div className={classes.container}>Loading...</div>;
  } else
    return (
      <div className={classes.container}>
        <FavList eventIds={eventIds ? eventIds : []} />
      </div>
    );
};

export default FavListPage;

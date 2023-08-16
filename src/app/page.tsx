"use client";
import Image from "next/image";
import { Text } from "@mantine/core";
import { Button } from "~/app/components";
import { useStyles } from "./styles";

const HomePage = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.main}>
        <div className={classes.relativeContainer}>
          <div className={classes.flexContainer}>
            <div className={classes.absoluteInside} />
            <div className={classes.flexContainer}>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={45.5}
                height={57.5}
                className={classes.logo}
              />
              <Text className={classes.heading} fz="lg" fw={700} mb={10}>
                Tech Meetup Map
              </Text>
              <Text
                className={classes.description}
                fw={500}
                mb={20}
                maw={380}
                ta="center"
              >
                Looking for a way to stay up-to-date on the latest tech meetups
                happening in Vancouver? This app displays all upcoming tech
                events in Vancouver, and you can search for events by date.
              </Text>
              <Button name="Find Events" linkTo="/map" buttonType="tertiary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

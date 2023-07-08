"use client";
import { createStyles, rem } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import Button from "~/clients/components/Button";
import Text from "~/clients/components/Text";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteTopLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "11%",
    width: "12%",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
  },
  absoluteBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "10%",
    width: "12%",
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
  },
  relativeContainer: {
    position: "relative",
    boxSizing: "border-box",
    height: "59%",
    width: "66%",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    padding: "25px",
  },
  absoluteInside: {
    position: "absolute",
    left: "-13px",
    top: "30px",
    margin: "auto",
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    transform: "rotate(1deg)",
  },
  flexContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: rem(10),
  },
  heading: {
    fontWeight: 700,
    marginBottom: rem(10),
  },
  description: {
    fontWeight: 500,
    marginBottom: rem(20),
    maxWidth: rem(380),
    textAlign: "center",
  },
}));

const HomePage = () => {
  const { classes } = useStyles();

  return (
    <>
      <main className={classes.main}>
        <div className={classes.absoluteTopLeft} />
        <div className={classes.absoluteBottomRight} />
        <div className={classes.relativeContainer}>
          <div className={classes.flexContainer}>
            <div className={classes.absoluteInside} />
            <div className={classes.flexContainer}>
              <Image
                src="/images/logo.png"
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
              <Link href="/map">
                <Button buttonType="tertiary">Find Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;

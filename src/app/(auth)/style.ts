import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  frame1: {
    height: "85vh",
    width: "50vw",
    maxWidth: "35rem",
    borderRadius: "2.5rem",
    position: "relative",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,
    [theme.fn.smallerThan("sm")]: {
      width: "80vw",
    },
  },
  frame2: {
    width: "100%",
    maxWidth: "35rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2.5rem",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,
    position: "absolute",
    top: "8px",
    right: "9px",
    height: "100%",
    [theme.fn.smallerThan("sm")]: {
      width: "80vw",
    },
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  form: {
    paddingTop: rem(80),
    backgroundColor: "transparent",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    margin: "3% auto",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },
  container: {
    paddingTop: rem(80),
  },
}));

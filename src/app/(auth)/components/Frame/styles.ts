import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  frame1: {
    height: "fit-content",
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
    }
  },
}));

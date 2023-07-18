import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  root: { color: theme.colorScheme === "dark" ? theme.white : theme.black },

  favCards: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "34rem",
    width: "80vw",
    maxWidth: "43rem",
    minWidth: "15rem",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,

    borderRadius: "2.5rem",
    position: "relative",
    marginBottom: "3%",
    [theme.fn.largerThan("sm")]: {
      height: "15rem",
      width: "80vw",
    },
  },
  favCardLayout: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "2.5rem",
    backgroundColor: "rgba(255, 255, 255,0.1)",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,
    position: "absolute",
    top: "0.3rem",
    right: "0.5rem",
    height: "100%",
    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  leftContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2% 3%",
    [theme.fn.largerThan("sm")]: {
      width: "50%",
    },
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "5%",
    height: "100%",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "50%",
    },
  },
}));

import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
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
}));

import { createStyles, rem } from "@mantine/core";
export const HEADER_HEIGHT = rem(70);

export const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    borderBottom: "none",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    margin: `${rem(8)} ${rem(15)}`,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.blue[0]
        : theme.colors.dark[9],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      textDecoration: "underline",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    textDecoration: "underline",
  },
}));

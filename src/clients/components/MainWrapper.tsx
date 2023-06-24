"use client";

import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
}));

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default MainWrapper;

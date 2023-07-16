"use client";
import { Flex } from "@mantine/core";
import { useStyles } from "./styles";

export const Container = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return (
    <Flex
      justify="center"
      align="center"
      mih="100%"
      direction="column"
      className={classes.container}
    >
      {children}
    </Flex>
  );
};

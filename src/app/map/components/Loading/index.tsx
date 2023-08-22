"use client";

import { Image, Text } from "@mantine/core";
import { useStyles } from "./styles";

export const Loading = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Image
        width={150}
        height={150}
        mt={-80}
        src="/images/loading.gif"
        alt="loading"
      />
      <Text align="center" fz="sm" mt={15}>
        searching for <br />
        upcoming events <br />
        near you ...
      </Text>
    </div>
  );
};

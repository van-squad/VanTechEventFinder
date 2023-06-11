"use client";
import Image from "next/image";
import { createStyles, Container, Group, rem, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <Image src="/images/logo.png" alt="logo" width={45.5} height={57.5} />{" "}
          Tech Meets
        </div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Text>&copy;2023 van squad</Text>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;

"use client";
import { Container, Group, Text } from "@mantine/core";
import Image from "next/image";
import { useStyles } from "./styles";

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <Image src="/images/logo.png" alt="logo" width={45.5} height={57.5} />{" "}
          Tech Meets
        </div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Text>&copy;2023 van squad</Text>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;

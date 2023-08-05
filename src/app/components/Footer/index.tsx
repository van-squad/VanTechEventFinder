"use client";
import { Container, Group, Text } from "@mantine/core";
import { useStyles } from "./styles";

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} position="right" noWrap>
            Tech Meets <Text>&copy;2023 van squad</Text>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;

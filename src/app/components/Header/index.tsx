"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ThemeSwitch } from "../../components";
import { Button } from "~/components";
import { BUTTON_VARIANTS } from "~/components/Button";
import { useStyles, HEADER_HEIGHT } from "./styles";
import { signOut } from "next-auth/react";

const LINKS = [
  { link: "/", label: "Home" },
  { link: "/map", label: "Map" },
];

const Header = () => {
  const activePathname = usePathname();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = LINKS.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: activePathname === link.link,
      })}
    >
      {link.label}
    </Link>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <div>
          <Image src="/images/logo.png" alt="logo" width={45.5} height={57.5} />{" "}
          Tech Meets
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
          <ThemeSwitch />
          {/* Temporal Button for logout */}
          <Button
            buttonType={BUTTON_VARIANTS.TERTIARY}
            mt="sm"
            onClick={() => void signOut()}
          >
            Logout
          </Button>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <ThemeSwitch />
              {/* Temporal Button for logout */}
              <Button
                buttonType={BUTTON_VARIANTS.TERTIARY}
                mt="sm"
                onClick={() => void signOut()}
              >
                Logout
              </Button>
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
};

export default Header;

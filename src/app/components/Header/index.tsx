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
import { useStyles, HEADER_HEIGHT } from "./styles";
import { BUTTON_VARIANTS } from "~/components/Button";
import { Button } from "~/components";

const loggedIn = true; 

const LINKS = [
  { link: "/map", label: "Map", buttonType: BUTTON_VARIANTS.PRIMARY },
  loggedIn
    ? {
        link: "/favlist",
        label: "Fav Events",
        buttonType: BUTTON_VARIANTS.SECONDARY,
      }
    : {
        link: "/login",
        label: "Login",
        buttonType: BUTTON_VARIANTS.SECONDARY,
      },
  loggedIn
    ? {
        link: "/logout",
        label: "Log Out",
        buttonType: BUTTON_VARIANTS.TERTIARY,
      }
    : {
        link: "/signup",
        label: "Sign Up",
        buttonType: BUTTON_VARIANTS.TERTIARY,
      },
];

const Header = () => {
  const activePathname = usePathname();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = LINKS.map((link) =>
    opened ? (
      <Link
        key={link.label}
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: activePathname === link.link,
        })}
      >
        {link.label}
      </Link>
    ) : (
      <Link
        key={link.label}
        href={link.link}
      >
        <Button buttonType={link.buttonType} style={{ marginTop: "5%" }}>
          {link.label}{" "}
        </Button>
      </Link>
    )
  );

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={45.5} height={57.5} />
        </Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          <ThemeSwitch />

          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
};

export default Header;

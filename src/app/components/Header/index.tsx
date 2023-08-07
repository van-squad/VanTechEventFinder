"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
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
  { link: "/map", label: "Map", showLoginNav: true, showLogoutNav: true },
  {
    link: "/favlist",
    label: "Fav Events",
    showLoginNav: true,
    showLogoutNav: false,
  },
  {
    link: "/login",
    label: "Login",
    showLoginNav: false,
    showLogoutNav: true,
  },
  {
    link: "/logout",
    label: "Log Out",
    buttonType: BUTTON_VARIANTS.TERTIARY,
    showLoginNav: true,
    showLogoutNav: false,
  },
  {
    link: "/signup",
    label: "Sign Up",
    showLoginNav: false,
    showLogoutNav: true,
  },
];

const Header = () => {
  const activePathname = usePathname();
  const { data: session } = useSession();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const navLinks = session
    ? LINKS.filter((nav) => nav.showLoginNav)
    : LINKS.filter((nav) => nav.showLogoutNav);

  const items = navLinks.map((link) =>
    link.label === "Log Out" && link.buttonType ? (
      <Button
        key={link.label}
        buttonType={link.buttonType}
        style={{ margin: "1rem" }}
        onClick={() => void signOut()}
      >
        {link.label}
      </Button>
    ) : (
      <Link
        key={link.label}
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: activePathname === link.link,
        })}
      >
        {link.label}
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
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <ThemeSwitch />
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles} onClick={toggle}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
};

export default Header;

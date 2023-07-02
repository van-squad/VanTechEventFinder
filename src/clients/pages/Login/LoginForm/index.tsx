"use client";
import Button from "~/clients/components/Button";
import Link from "next/link";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Title,
  Text,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  frame1: {
    height: "75vh",
    width: "50vw",
    maxWidth: "35rem",
    borderRadius: "2.5rem",
    position: "relative",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,
    [theme.fn.smallerThan("sm")]: {
      width: "80vw",
    },
  },
  frame2: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "2.5rem",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    height: "100%",
    [theme.fn.smallerThan("sm")]: {
      width: "80vw",
    },
  },
  form: {
    paddingTop: rem(80),
    backgroundColor: "transparent",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    margin: "3% auto",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  }
}));

const LoginForm = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.frame1}>
        <div className={classes.frame2}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title
              order={2}
              className={classes.title}
              ta="center"
              mt="md"
              mb={50}
            >
              Log In
            </Title>

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              style={{ width: "100%" }}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              style={{ width: "100%" }}
            />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />

            <Button buttonType="secondary">
              Login
            </Button>

            <Text mt="md">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
               style={{ fontWeight: "700", color:"white"}}
              >
                Sign Up
              </Link>
            </Text>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

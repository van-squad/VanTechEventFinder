"use client";
import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { useForm } from "@mantine/form";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Title,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { BUTTON_VARIANTS } from "~/app/components/Button";
import { Button } from "~/app/components";
import { Container, Frame } from "../components";

import { useStyles } from "../style";

const LogIn = () => {
  const { classes } = useStyles();
  const { data: session } = useSession();
  const [error, setError] = useState("");
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
    validateInputOnChange: true,

    // functions will be used to validate values at corresponding key
    validate: {
      password: (value) => (value.length < 1 ? "Please input Password" : null),
      email: (value) =>
        value.length < 1 ? "Please input email address" : null,
    },
  });

  // To check if there is no input error
  const isDisabled = Object.keys(form.errors).length !== 0 ? true : false;

  const handleSubmit = async (values: {
    email: string;
    password: string;
    rememberPassword: boolean;
  }) => {
    try {
      const result = await signIn(
        "credentials",
        {
          redirect: false,
          email: values.email,
          password: values.password,
          rememberPassword: values.rememberPassword,
        },
        { rememberPassword: values.rememberPassword ? "true" : "false" }
      );

      if (!result?.error) {
        // Retry: It's gross but here is what it is 🤷‍♀️ 🤷‍♀️ 🤷‍♀️
        if (!session) {
          await signIn(
            "credentials",
            {
              redirect: false,
              email: values.email,
              password: values.password,
            },
            { rememberPassword: values.rememberPassword ? "true" : "false" }
          );
        }
        form.reset();
      }
      if (result?.error) {
        form.reset();
        throw Error();
      }
    } catch (error) {
      if (error) {
        setError("Failed to login!");
      }
    }
  };

  if (session) {
    redirect("/");
  }

  return (
    <Container>
      <Frame>
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
          <form onSubmit={form.onSubmit((values) => void handleSubmit(values))}>
            {error && (
              <Text fw="bold" color={theme.colors.red[0]} mt={3}>
                {error}
              </Text>
            )}
            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              style={{ width: "100%" }}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              style={{ width: "100%" }}
              {...form.getInputProps("password")}
            />
            <Checkbox
              label="Keep me logged in"
              mt="xl"
              size="md"
              {...form.getInputProps("rememberPassword")}
            />

            <Button
              name="Login"
              buttonType={BUTTON_VARIANTS.SECONDARY}
              style={{ marginTop: "5%" }}
              type="submit"
              disabled={isDisabled}
            />

            <Text mt="md">
              Don&apos;t have an account? &nbsp;
              <Link href="/signup" className={classes.link}>
                Sign Up
              </Link>
            </Text>
          </form>
        </Paper>
      </Frame>
    </Container>
  );
};

export default LogIn;

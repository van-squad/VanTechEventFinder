"use client";
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
} from "@mantine/core";
import { BUTTON_VARIANTS } from "~/components/Button";
import { Button } from "~/components";
import { Container, Frame } from "../components";

import { useStyles } from "../style";

const LogIn = () => {
  const { classes } = useStyles();
  const { data: session } = useSession();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      password: (value) => (value.length < 1 ? "Please input Password" : null),
      email: (value) =>
        value.length < 1 ? "Please input email address" : null,
    },
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      if (!result?.error) {
        form.reset();
        // router.push("/");
      }
      if (result?.error) {
        form.reset();
        throw Error();
      }
    } catch (error) {
      console.log(error);
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
            <Checkbox label="Keep me logged in" mt="xl" size="md" />

            <Button
              buttonType={BUTTON_VARIANTS.SECONDARY}
              style={{ marginTop: "5%" }}
              type="submit"
            >
              Login
            </Button>

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

"use client";
import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Paper,
  TextInput,
  Box,
  PasswordInput,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { BUTTON_VARIANTS } from "~/app/components/Button";
import { Button } from "~/app/components";
import { Container, Frame } from "../components";
import { useStyles } from "../style";
import { trpc } from "~/providers";
import { type User } from "@prisma/client";

const Signup = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      userName: "",
      email: "",
      password: "secret",
      confirmPassword: "sevret",
    },
    validateInputOnChange: true,

    // functions will be used to validate values at corresponding key
    validate: {
      userName: (value) =>
        value.length < 2 ? "userName must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const { classes } = useStyles();
  const { mutate, error } = trpc.auth.signup.useMutation({
    onSuccess: (data) => {
      setUserData(data);
    },
  });

  // To check if there is no input error
  const isDisabled = Object.keys(form.errors).length !== 0 ? true : false;

  if (userData) {
    redirect("/login");
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
            Sign Up
          </Title>
          {error && (
            <Text fw="bold" color={theme.colors.red[0]} mt={3}>
              {error.message}
            </Text>
          )}
          <Box maw={320} mx="auto" style={{ width: "100%" }}>
            <form
              onSubmit={form.onSubmit((values) => {
                console.log("run");
                mutate({
                  name: values.userName,
                  email: values.email,
                  password: values.password,
                });
              })}
            >
              <TextInput
                label="User Name"
                placeholder="Name"
                {...form.getInputProps("userName")}
              />
              <TextInput
                mt="sm"
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
              />

              <PasswordInput
                label="Password"
                placeholder="Password"
                {...form.getInputProps("password")}
              />

              <PasswordInput
                mt="sm"
                label="Confirm password"
                placeholder="Confirm password"
                {...form.getInputProps("confirmPassword")}
              />
              <Button
                name="Submit"
                buttonType={BUTTON_VARIANTS.PRIMARY}
                type="submit"
                mt="sm"
                disabled={isDisabled}
              />

              <Text mt="md">
                Already have an account?{" "}
                <Link href="/login" className={classes.link}>
                  Log In
                </Link>
              </Text>
            </form>
          </Box>
        </Paper>
      </Frame>
    </Container>
  );
};

export default Signup;

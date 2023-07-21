"use client";
import Link from "next/link";
import {
  Paper,
  TextInput,
  Box,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {BUTTON_VARIANTS} from "~/components/Button";
import { Button } from "~/components";
import { Container, Frame } from "../components";
import { useStyles } from "../style";

const Signup = () => {
  const form = useForm({
    initialValues: {
      userName: "",
      email: "",
      password: "secret",
      confirmPassword: "sevret",
    },

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
          <Box maw={320} mx="auto" style={{ width: "100%" }}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
              <Button buttonType={BUTTON_VARIANTS.PRIMARY} type="submit" mt="sm">
                Submit
              </Button>

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

"use client";
import Link from "next/link";
import Button from "~/clients/components/Button";
import { useForm } from "@mantine/form";
import {useStyles} from "~/clients/pages/style";
import {
  Paper,
  TextInput,
  Box,
  PasswordInput,
  Text,
  Title,
} from "@mantine/core";



const SignupForm = () => {
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
                <Button buttonType="primary" type="submit" mt="sm">
                  Submit
                </Button>

                <Text mt="md">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    style={{ fontWeight: "700", color: "white" }}
                  >
                    Log In
                  </Link>
                </Text>
              </form>
            </Box>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SignupForm;

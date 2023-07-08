"use client";
import Button from "~/clients/components/Button";
import Link from "next/link";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Title,
  Text,
} from "@mantine/core";

import {useStyles} from "~/clients/pages/style";


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

            <Button buttonType="secondary" style={{marginTop:"5%"}}>
              Login
            </Button>

            <Text mt="md">
              Don&apos;t have an account? &nbsp;
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

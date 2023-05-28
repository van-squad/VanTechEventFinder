"use client";
import { Button as MantineButton, type ButtonProps } from "@mantine/core";

const Button = (props: ButtonProps) => {
  // Add other props here when necessary
  const { children, variant = undefined } = props;
  return <MantineButton variant={variant}>{children}</MantineButton>;
};

export default Button;

"use client";
import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { useStyles } from "./styles";

export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;

type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

interface ButtonProps extends MantineButtonProps {
  buttonType: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  children,
  ...rest
}) => {
  const { classes } = useStyles();
  return (
    <MantineButton
      className={
        buttonType === "primary"
          ? classes.primary
          : buttonType === "secondary"
          ? classes.secondary
          : classes.tertiary
      }
      {...rest}
    >
      {children}
    </MantineButton>
  );
};

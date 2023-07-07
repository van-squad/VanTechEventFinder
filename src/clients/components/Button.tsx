"use client";

import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { createStyles } from "@mantine/core";
export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;

const useStyles = createStyles((theme) => ({
  primary: {
    backgroundColor: "transparent",
    color: theme.colors.blue[1],
    border: `1px solid ${theme.colors.blue[1]}`,

    "&:hover": {
      backgroundColor: theme.colors.blue[1],
      color: theme.black,
      border: `1px solid ${theme.black}`,
    },
  },
  secondary: {
    backgroundColor: "transparent",
    color: theme.colors.red[0],
    border: `1px solid ${theme.colors.red[0]}`,

    "&:hover": {
      backgroundColor: theme.colors.red[0],
      color: theme.black,
      border: `1px solid ${theme.black}`,
    },
  },
  tertiary: {
    backgroundColor: theme.colors.blue[2],
    color: theme.colors.blue[0],
    border: `1px solid ${theme.colors.blue[0]}`,

    "&:hover": {
      backgroundColor: theme.colors.blue[0],
      color: theme.colors.blue[2],
      border: `1px solid ${theme.colors.blue[2]}`,
    },
  },
}));

type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

interface ButtonProps extends MantineButtonProps {
  buttonType: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ buttonType, children, ...rest }) => {
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

export default Button;


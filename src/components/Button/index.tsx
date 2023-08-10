"use client";
import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import { useStyles } from "./styles";
import Link from "next/link";

export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
} as const;

type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

interface ButtonProps extends MantineButtonProps {
  buttonType: ButtonVariant;
  onClick?: () => void;
  linkTo?: string;
  name: string;
}

export const Button: React.FC<ButtonProps> = ({
  buttonType,
  linkTo,
  name,
  ...rest
}) => {
  const { classes } = useStyles();
  const color =
    buttonType === "primary"
      ? classes.primary
      : buttonType === "secondary"
      ? classes.secondary
      : classes.tertiary;

  return linkTo ? (
    <Link href={linkTo}>
      <MantineButton className={color} {...rest}>
        {name}
      </MantineButton>
    </Link>
  ) : (
    <MantineButton className={color} {...rest}>
      {name}
    </MantineButton>
  );
};

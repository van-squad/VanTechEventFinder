"use client";
import { useStyles } from "./styles";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return <main className={classes.root}>{children}</main>;
};

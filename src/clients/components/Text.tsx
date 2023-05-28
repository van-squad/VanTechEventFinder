"use client";
import { Text as MantineText, type TextProps } from "@mantine/core";

const Text = (props: TextProps) => {
  // Add other props here when necessarys
  const {
    children,
    fz = undefined,
    fw = undefined,
    mb = undefined,
    maw = undefined,
  } = props;
  return (
    <MantineText fz={fz} fw={fw} mb={mb} maw={maw}>
      {children}
    </MantineText>
  );
};

export default Text;

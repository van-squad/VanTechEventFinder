"use client";

import {
  Global,
  MantineProvider as Mantine,
  useMantineColorScheme,
} from "@mantine/core";
import theme from "~/utils/theme";

export interface MantineProviderProps {
  children: React.ReactNode;
}

const MantineProvider = ({ children }: MantineProviderProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Mantine theme={theme} withGlobalStyles withNormalizeCSS>
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor:
              colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
            color: colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          },
        })}
      />
      {children}
    </Mantine>
  );
};

export default MantineProvider;

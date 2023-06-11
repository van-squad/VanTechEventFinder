"use client";

import {
  MantineProvider as Mantine,
  useMantineColorScheme,
} from "@mantine/core";

export interface MantineProviderProps {
  children: React.ReactNode;
}

const MantineProvider = ({ children }: MantineProviderProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Mantine theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      {children}
    </Mantine>
  );
};

export default MantineProvider;

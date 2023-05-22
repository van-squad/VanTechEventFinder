"use client";

import { MantineProvider as Mantine } from "@mantine/core";

export interface MantineProviderProps {
  children: React.ReactNode;
}

const MantineProvider = ({ children }: MantineProviderProps) => (
  <Mantine withGlobalStyles withNormalizeCSS>
    {children}
  </Mantine>
);

export default MantineProvider;

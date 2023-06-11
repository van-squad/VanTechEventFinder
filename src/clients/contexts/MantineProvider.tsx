"use client";
// import { useState, useEffect, useRef } from "react";
import {
  Global,
  MantineProvider as Mantine,
  useMantineColorScheme,
} from "@mantine/core";
import theme from "~/utils/theme";

interface MantineProviderProps {
  children: React.ReactNode;
}

const MantineProvider = ({ children }: MantineProviderProps) => {
  const { colorScheme } = useMantineColorScheme();
  /*
    // Enale tailwind dark mode
    useEffect(() => {
    const rootRef = document.documentElement;
    if (isDark) {
      rootRef.classList.add("dark");
    } else {
      rootRef.classList.remove("dark");
    }
    if (isDark) {
      rootRef.classList.add("dark");
    } else {
      rootRef.classList.remove("dark");
    }
    }, [isDark]); 
  */

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

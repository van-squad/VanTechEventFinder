"use client";
import { useState, useEffect, useRef } from "react";
import {
  ColorSchemeProvider as MantineColorSchemeProvider,
  type ColorScheme,
  MantineProvider as Mantine,
} from "@mantine/core";

interface MantineProviderProps {
  children: React.ReactNode;
}
const MantineProvider = ({ children }: MantineProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const isDark = colorScheme === "dark";
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (isDark ? "light" : "dark"));

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
  return (
    <MantineColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <Mantine theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {children}
      </Mantine>
    </MantineColorSchemeProvider>
  );
};

export default MantineProvider;

"use client";
import { ColorSchemeProvider as ColorTheme } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export interface ColorSchemeProps {
  children: React.ReactNode;
}

type ColorScheme = "light" | "dark";

const ColorSchemeProvider = ({ children }: ColorSchemeProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const current = localStorage
    .getItem("mantine-color-scheme")
    ?.replace(/\"/g, "") as ColorScheme;

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorTheme
      colorScheme={current || colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      {children}
    </ColorTheme>
  );
};

export default ColorSchemeProvider;

"use client";
import { useState, useEffect } from "react";
import {
  ColorSchemeProvider as MantineColorSchemeProvider,
  type ColorScheme,
  MantineProvider as Mantine,
  useEmotionCache,
} from "@mantine/core";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";

interface MantineProviderProps {
  children: React.ReactNode;
}
const MantineProvider = ({ children }: MantineProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const isDark = colorScheme === "dark";
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (isDark ? "light" : "dark"));

  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

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
    <CacheProvider value={cache}>
      <MantineColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <Mantine theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          {children}
        </Mantine>
      </MantineColorSchemeProvider>
    </CacheProvider>
  );
};

export default MantineProvider;

"use client";
import { CacheProvider } from "@emotion/react";
import {
  Global,
  MantineProvider as Mantine,
  useEmotionCache,
  useMantineColorScheme,
} from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import theme from "~/utils/theme";

interface MantineProviderProps {
  children: React.ReactNode;
}

const MantineProvider = ({ children }: MantineProviderProps) => {
  const { colorScheme } = useMantineColorScheme();

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

  return (
    <CacheProvider value={cache}>
      <Mantine
        theme={{ ...theme, colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.blue[3]
                  : theme.white,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
            },
          })}
        />
        {children}
      </Mantine>
    </CacheProvider>
  );
};

export default MantineProvider;

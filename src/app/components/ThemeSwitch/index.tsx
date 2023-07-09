"use client";
import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
  type ColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export const ThemeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme() as {
    colorScheme: ColorScheme;
    toggleColorScheme: (colorScheme?: ColorScheme) => void;
  };

  const theme = useMantineTheme();

  return (
    <Group m={10}>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
        offLabel={
          <IconMoonStars
            color={theme.colors.gray[6]}
            size="1.25rem"
            stroke={1.5}
          />
        }
      />
    </Group>
  );
};

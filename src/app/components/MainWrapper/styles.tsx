import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    minHeight: "calc(100vh - 4.375rem)",
  },
}));

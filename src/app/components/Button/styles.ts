import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  primary: {
    backgroundColor: "transparent",
    color: theme.colors.blue[1],
    border: `1px solid ${theme.colors.blue[1]}`,

    "&:hover": {
      backgroundColor: theme.colors.blue[1],
      color: theme.black,
      border: `1px solid ${theme.black}`,
    },
  },
  secondary: {
    backgroundColor: "white",
    color: theme.colors.red[0],
    border: `1px solid ${theme.colors.red[0]}`,

    "&:hover": {
      backgroundColor: theme.colors.red[0],
      color: theme.black,
      border: `1px solid ${theme.black}`,
    },
  },
  tertiary: {
    backgroundColor: theme.colors.blue[2],
    color: theme.colors.blue[0],
    border: `1px solid ${theme.colors.blue[0]}`,

    "&:hover": {
      backgroundColor: theme.colors.blue[0],
      color: theme.colors.blue[2],
      border: `1px solid ${theme.colors.blue[2]}`,
    },
  },
}));

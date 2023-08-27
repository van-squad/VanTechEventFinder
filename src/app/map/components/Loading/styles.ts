import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "calc(100vh - 4.375rem)",
    position: "absolute",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.blue[3]
        : theme.colors.gray[0],
    zIndex: 100,
  },
}));

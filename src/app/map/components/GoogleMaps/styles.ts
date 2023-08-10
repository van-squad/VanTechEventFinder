import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  container: {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 20,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
  },
  googleMap: {
    width: "100%",
    height: "calc(100vh - 4.375rem)",
  },
  cards: { position: "absolute", top: "10px", left: "300px" },
}));

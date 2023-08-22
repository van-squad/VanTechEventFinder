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
    height: "100vh",
    width: "100%",
  },
  cards: { position: "absolute", top: "10px", left: "300px" },
}));

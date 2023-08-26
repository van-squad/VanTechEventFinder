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
  card: {
    width: "22rem",
    height: "auto",
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },

  closeButton: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    marginLeft: "80%",
    marginTop: "5%",
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem 3rem",
  }
}));

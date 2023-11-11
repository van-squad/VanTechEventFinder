import { createStyles, rem } from "@mantine/core";
export const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5%",
  },
  calendarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(20),
    paddingBottom: rem(20),
  },
  overlay: {
    zIndex: 30,
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  notification: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize:"2rem"
  },
}));

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
}));

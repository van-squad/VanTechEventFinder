import { createStyles, rem } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    display: "flex",
    minHeight: "calc(100vh - 4.375rem)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  absoluteTopLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "11%",
    width: "12%",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
  },
  absoluteBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "10%",
    width: "12%",
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
  },
  relativeContainer: {
    position: "relative",
    boxSizing: "border-box",
    height: "59%",
    width: "66%",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    padding: "25px",
  },
  absoluteInside: {
    position: "absolute",
    left: "-13px",
    top: "30px",
    margin: "auto",
    boxSizing: "border-box",
    height: "100%",
    width: "100%",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : theme.colors.blue[3]
    }`,
    transform: "rotate(1deg)",
  },
  flexContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: rem(10),
  },
  heading: {
    fontWeight: 700,
    marginBottom: rem(10),
  },
  description: {
    fontWeight: 500,
    marginBottom: rem(20),
    maxWidth: rem(380),
    textAlign: "center",
  },
}));

import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  card: {
    width: "22rem",
    height: "auto",
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.blue[3] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    [`@media (max-width: 768px)`]: {
      width: "90%",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem 3rem",
  },
  favIcon: {
    position: "absolute",
    bottom: "-5px",
    right: "5px",
    borderRadius: "50%",
    boxShadow: "1px 1px 3px 1px #ABABAB",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "white",
      boxShadow: "2px 2px 3px 2px #ABABAB",
    },
  },
}));

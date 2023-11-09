import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  root: { color: theme.colorScheme === "dark" ? theme.white : theme.black },

  eventCard: {
    position: "relative",
    width: "80vw",
    height: "auto",
    maxWidth: "43rem",
    minWidth: "15rem",
    borderRadius: "2.5rem",
    marginBottom: "3%",
    transition: "all 0.2s ease-out",
    boxShadow: "rgba(0, 0, 0, 0.15) 0 5px 5px",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,

    "&::before": {
      content: '""',
      borderRadius: "2.5rem",
      position: "absolute",
      width: "100%",
      height: "100%",
      marginTop: "-4px",
      marginLeft: "4px",
      transition: "all 0.2s ease-out",

      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
      }`,
    },

    "&:hover::before": {
      marginTop: "5px",
      marginLeft: "10px",
      background: "rgba(255,255,255,0.5)",
    },
  },

  inner: {
    padding: "30px 20px",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  innerContainer: {
    width: "50%",
    position: "relative",
    [`@media (max-width: 768px)`]: {
      width: "90%",
    },
  },

  image: {
    width: "100%",
    height: "50%",
    paddingTop:"0%",

    [`@media (max-width: 768px)`]: {
      paddingTop: "5%",
    },
  },

  btn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  favIcon: {
    position: "absolute",
    bottom: "0px",
    right: "10px",
    borderRadius: "50%",
    boxShadow: "1px 1px 3px 1px #ABABAB",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "white",
      boxShadow: "2px 2px 3px 2px #ABABAB",
    },
  },
}));

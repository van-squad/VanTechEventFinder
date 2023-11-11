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
    cursor: "pointer",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[2] : "#ccc"
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
        theme.colorScheme === "dark" ? theme.colors.blue[2] : "#ccc"
      }`,
    },

    "&:hover": {
      boxShadow: " rgba(0, 0,0, 0.06) 0px 2px 4px 0px inset;",
      border: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.blue[1] : "#aaa"
      }`,

      "&::before": {
        marginTop: "5px",
        marginLeft: "6px",
        border: `1px solid ${
          theme.colorScheme === "dark" ? theme.colors.blue[1] : "#aaa"
        }`,
      },
    },
  },

  inner: {
    padding: "30px 20px",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  contents: {
    div: {
      lineHeight: "1.35",
    },
    [`@media (max-width: 768px)`]: {
      width: "90%",
    },
  },

  image: {
    div: {
      overflow: "hidden",
      width: "100%",
    },
    [`@media (max-width: 768px)`]: {
      paddingTop: "5%",
    },
  },

  favIcon: {
    position: "absolute",
    bottom: "30px",
    right: "30px",
    borderRadius: "50%",
    boxShadow: "1px 1px 3px 1px #ABABAB",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "white",
      boxShadow: "2px 2px 3px 2px #ABABAB",
    },
  },
}));

"use client";
import { Text } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
import { createStyles } from "@mantine/core";
// import { useMantineTheme, useMantineColorScheme } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: { color: theme.colorScheme === "dark" ? theme.white : theme.black },

  favCards: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "550px",
    width: "80vw",
    maxWidth: "700px",
    minWidth: "250px",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,

    borderRadius: "40px",
    position: "relative",
    marginBottom: "3%",
    [theme.fn.largerThan("sm")]: {
      height: "250px",
      width: "80vw",
    },
  },
  favCardLayout: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "40px",
    backgroundColor: "rgba(255, 255, 255,0.1)",
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[1] : "black"
    }`,
    position: "absolute",
    top: "2px",
    right: "9px",
    height: "100%",
    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  leftContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2% 3%",
    [theme.fn.largerThan("sm")]: {
      width: "50%",
    },
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: "5%",
    height: "100%",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "50%",
    },
  },
}));

type CardsProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  website: string;
};

const Cards: React.FC<CardsProps> = ({
  title,
  date,
  location,
  description,
  imageUrl,
  website,
}) => {
  // const isMobile = useMediaQuery("(max-width: 768px)");
  const { classes } = useStyles();
  // const mantineTheme = useMantineTheme();
  // console.log("mantine theme is ", mantineTheme);

  // const { colorScheme } = useMantineColorScheme();
  // console.log("color scheme is ", colorScheme);
  return (
    <div className={classes.favCards}>
      <div className={classes.favCardLayout}>
        <div className={classes.leftContent}>
          <div>
            <Text fw={700} fz="lg" className="title">
              {title}
            </Text>
            <Text fz="sm" className="date">
              {date}
            </Text>
          </div>

          <img
            src={imageUrl}
            alt={`image of ${title}`}
            style={{
              width: "100%",
              height: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className={classes.rightContent}>
          <Text fw={700} fz="md" className="location">
            <a href="#" target="_blank" className={classes.root}>
              {location}
            </a>
          </Text>
          <Text fz="xs">{description}</Text>

          <Text>
            <a
              style={{ fontWeight: 700 }}
              className={classes.root}
              href={website}
            >
              Website
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Cards;

"use client";
import { Text } from "@mantine/core";
import { useStyles } from "./styles";

type CardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  website: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  date,
  location,
  description,
  imageUrl,
  website,
}) => {
  const { classes } = useStyles();
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

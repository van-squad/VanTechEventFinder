"use client";
import { Text } from "@mantine/core";
import { useStyles } from "./styles";
import Link from "next/link";
import Image from "next/image";

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

          <Image
            src={imageUrl}
            alt={`image of ${title}`}
            width = {500}
            height={500}
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
            <Link
              style={{ fontWeight: 700 }}
              className={classes.root}
              href={website}
            >
              Website
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

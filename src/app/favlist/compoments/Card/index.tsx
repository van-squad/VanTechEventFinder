import { Text } from "@mantine/core";
import { useStyles } from "./styles";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/app/components";
import { useSession } from "next-auth/react";

type CardProps = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  website: string;
  onClick: (id: string) => void;
};

export const Card: React.FC<CardProps> = ({
  id,
  title,
  date,
  location,
  description,
  imageUrl,
  website,
  onClick,
}) => {
  const { classes } = useStyles();
  const { data: session } = useSession();

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
            width={500}
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
          <Text fz="xs" className={classes.description}>
            {description}
          </Text>

          <Text>
            <Link
              style={{ fontWeight: 700 }}
              className={classes.root}
              href={website}
            >
              Website
            </Link>
          </Text>
          {session && (
            <Button
              name="DELETE"
              mt={4}
              buttonType="primary"
              onClick={() => onClick(id)}
            ></Button>
          )}
        </div>
      </div>
    </div>
  );
};

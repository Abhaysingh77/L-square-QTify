import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Style from "./Card.module.css";

export default function MultiActionCard({id, follows, image, title, type}) {
  return (
    <Card className={Style.card} sx={{ width: 159, height: 232 }} key={id}>
      <CardActionArea className={Style.cardImg}>
        <CardMedia
          component="img"
          height="170"
          image={image}
          alt={title}
        />
        {
          type ==='album' ? (<Chip className={Style.chip}
            label={`${follows} Follows`}
          />):(<Chip className={Style.chip}
            label={`${follows} Likes`}
          />)
        }
      </CardActionArea>
      <Typography color="#FFFFFF">{title}</Typography>
    </Card>
  );
}

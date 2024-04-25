import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Style from "./Card.module.css";

export default function MultiActionAreaCard({id, follows, image, title}) {
  return (
    <Card className={Style.card} sx={{ maxWidth: 159, maxHeight: 232 }} key={id}>
      <CardActionArea className={Style.cardImg}>
        <CardMedia
          component="img"
          height="170"
          image={image}
          alt={title}
        />
        <Chip className={Style.chip}
          label={`${follows} Follows`}
        />
      </CardActionArea>
      <Typography color="#FFFFFF">{title}</Typography>
    </Card>
  );
}

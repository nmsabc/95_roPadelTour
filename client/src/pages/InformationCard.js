import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@mui/material";

import React from "react";
import { red, yellow, green, blue, pink, orange } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

var ld = require("lodash");

function defStyles(note) {
      if (note.category === "work") {
        return red[500];
      }
      if (note.category === "travel") {
        return yellow[500];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "personal") {
        return orange["A700"];
      }
      if (note.category === "hobby") {
        return pink["A700"];
      }
      if (note.category === "sport") {
        return blue[700];
      }
};

function InformationCard({ note, changeFavorite, favIcon }) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: defStyles(note) }} aria-label="recipe">
              {ld.truncate(note.title, { length: 1, omission: "" })}
            </Avatar>
          }
          title={note.title}
          subheader={[note.category, " :: ", note.entry_ts]}
        />
        <CardContent>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            variant="subtitle1"
          >
           {note.subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              changeFavorite(note.id);
            }}
          >
            {note.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          <IconButton onClick={() => {}}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default InformationCard;

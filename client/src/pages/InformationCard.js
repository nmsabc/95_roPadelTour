import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import React from "react";
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

var ld = require("lodash");

function InformationCard({ note }) {
  const [expanded, setExpanded] = React.useState(false);
  const [favIcon, setFavIcon] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const changeFavoriteIcon = () => {
    setFavIcon(!favIcon);
  };

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red }} aria-label="recipe">
              {ld.truncate(note.title, { length: 1, omission: "" })}
            </Avatar>
          }
          action={
            <IconButton onClick={() => console.log("delete", note.title)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.description}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {note.description}
            <br /> This impressive paella is a perfect party dish and a fun meal
            to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              console.log("fav this... ", note.title, favIcon);
              changeFavoriteIcon();
            }}
          >
            {favIcon ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            {/* {favIcon ? FavoriteIcon : FavoriteBorderIcon} */}
          </IconButton>
          <IconButton onClick={() => console.log("isShared", note.title)}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default InformationCard;

import { Grid } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import InformationCard from "./InformationCard";
import { ListOfComments } from "../assets/ListOfComments";

function Palmares() {
  const [favIcon, setFavIcon] = React.useState(false);

  const changeFavorite = (id) => {
    setFavIcon(!favIcon);
    ListOfComments[id].favorite = !ListOfComments[id].favorite;
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {ListOfComments.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <InformationCard note={note} changeFavorite={changeFavorite} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Palmares;

import { Grid } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import InformationCard from "./InformationCard";
import RecipeReviewCard from "../Not_used/RecipeReviewCard";

const listPalmares = [
  {
    id: 1,
    title: "Axtra info 1",
    description: "some form of dEsC_1",
    note: "note 1 ...",
  },
  {
    id: 2,
    title: "Bxtra info 2",
    description: "some form of dEsC_2",
    note: "note 2 ...",
  },
  {
    id: 3,
    title: "Cxtra info 3",
    description: "some form of dEsC_3",
    note: "note 3 ...",
  },
  {
    id: 4,
    title: "Dextra info 4",
    description: "some form of dEsC_4",
    note: "note 4 ...",
  },
  {
    id: 5,
    title: "Extra info 5",
    description: "some form of dEsC_5",
    note: "note 5 ...",
  },
];
function Palmares() {
  return (
    <Container>
      <Grid container spacing={3}>
        {listPalmares.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <InformationCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Palmares;

import { Grid } from "@mui/material";
import React from "react";
import RecipeReviewCard from "../pages/RecipeReviewCard";

const listPalmares = [
  {
    id: 1,
    title: "extra info 1",
    description: "some form of dEsC_1",
    note: "note 1 ...",
  },
  {
    id: 2,
    title: "extra info 2",
    description: "some form of dEsC_2",
    note: "note 2 ...",
  },
  {
    id: 3,
    title: "extra info 3",
    description: "some form of dEsC_3",
    note: "note 3 ...",
  },
  {
    id: 4,
    title: "extra info 4",
    description: "some form of dEsC_4",
    note: "note 4 ...",
  },
  {
    id: 5,
    title: "extra info 5",
    description: "some form of dEsC_5",
    note: "note 5 ...",
  },
];
function DictMapper() {
  listPalmares.map((note) => console.log("Palma ... ", note.id, note));
  return (
    <div>
      {" "}
      <Grid>
        {listPalmares.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <RecipeReviewCard note={note} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DictMapper;

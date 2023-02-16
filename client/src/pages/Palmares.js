import { Grid } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import InformationCard from "./InformationCard";
import RecipeReviewCard from "../Not_used/RecipeReviewCard";

const listPalmares = [
  {
    id: 0,
    title: "Axtra info 1",
    subtitle: "this is how we do it ... ",
    description:
      "some form of dEsC_1, This impressive paella is a perfect party dish is a perfect party dish is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    note: "note 1 ...",
    favorite: false,
  },
  {
    id: 1,
    title: "Bxtra info 2",
    subtitle: "this is how we do it ... ",
    description:
      "some form of dEsC_2, This impressive paella is a perfect party dish and a fun meal to cook together with your fun meal to cook together with your fun meal to cook together with your fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    note: "note 2 ...",
    favorite: false,
  },
  {
    id: 2,
    title: "Cxtra info 3",
    subtitle: "this is how we do it ... ",
    description:
      "some form of dEsC_3, This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup 1 cup 1 cup 1 cup 1 cup 1 cup 1 cup of frozen peas along with the mussels, if you like.",
    note: "note 3 ...",
    favorite: false,
  },
  {
    id: 3,
    title: "Dxtra info 4",
    subtitle: "this is how we do it ... ",
    description:
      "some form of dEsC_4, This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas frozen peas frozen peas frozen peas frozen peas along with the mussels, if you like.",
    note: "note 4 ...",
    favorite: false,
  },
  {
    id: 4,
    title: "Extra info 5",
    subtitle: "this is how we do it ... ",
    description:
      "some form of dEsC_5, This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, along with the mussels, along with the mussels, along with the mussels, along with the mussels, along with the mussels, if you like.",
    note: "note 5 ...",
    favorite: false,
  },
];
function Palmares() {
  const [favIcon, setFavIcon] = React.useState(false);

  const changeFavorite = (id) => {
    setFavIcon(!favIcon);
    listPalmares[id].favorite = !listPalmares[id].favorite;
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {listPalmares.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <InformationCard note={note} changeFavorite={changeFavorite} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Palmares;

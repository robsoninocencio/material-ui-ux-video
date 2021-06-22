import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj, index) => {
    return (
      <Grid key={index} item xs={12} sm={4}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {coffeMakerList.map((coffeMakerObj, index) => getCoffeMakerCard(coffeMakerObj, index))}
    </Grid>
  );
};

export default Content;

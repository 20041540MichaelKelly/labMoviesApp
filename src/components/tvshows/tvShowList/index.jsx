import React from "react";
import TvShow from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TvShowList = ( {tvShows, actionFav, action }) => {
  let tvShowCard = tvShows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShow key={m.id} tvShow={m} actionFav={actionFav} action={action} />
    </Grid>
  ));
    
  return tvShowCard;
};

export default TvShowList;

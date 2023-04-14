import React from "react";
import Header from "../headerTvShowList";
import Grid from "@mui/material/Grid";
import TvShowList from "../tvShowList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function TvShowListPageTemplate({ tvShows, title,actionFav, action }) {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TvShowList action={action} tvShows={tvShows} actionFav={actionFav} />
      </Grid>
    </Grid>
  );
}
export default TvShowListPageTemplate;
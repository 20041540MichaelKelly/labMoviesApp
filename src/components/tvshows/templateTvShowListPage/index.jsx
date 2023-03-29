import React from "react";
import Header from "../../tvShows/headerTvShowList";
import Grid from "@mui/material/Grid";
import TvShowList from "../tvShowList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function TvShowListPageTemplate({ tvShows, title, action }) {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TvShowList action={action} tvShows={tvShows} />
      </Grid>
    </Grid>
  );
}
export default TvShowListPageTemplate;
import React from "react";
import Header from "../../movies/headerMovieList";
import Grid from "@mui/material/Grid";
import ActorsList from "../actorsList";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

function ActorListPageTemplate({ actors, title, action }) {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorsList action={action} actors={actors} />
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
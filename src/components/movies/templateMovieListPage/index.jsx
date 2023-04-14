import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    gridAutoFlow: "column",
    gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
    gridAutoColumns: "minmax(160px, 1fr)"
  }
}));

function MovieListPageTemplate({ movies, title, action, actionFav }) {
  const classes = useStyles();

  return (
    <Grid container elevation={8} sx={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList action={action} movies={movies} actionFav={actionFav} />
      </Grid>
    </Grid>
  );

}
export default MovieListPageTemplate;
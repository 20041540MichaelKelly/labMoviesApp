import React from "react";
import Header from "../../movies/headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../fantasyMovieList";
import { ImageList } from "@mui/material";
import {ImageListItem} from "@mui/material";
import Paper from "@material-ui/core/Paper";
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

function TemplateFantasyListPage({title, movies }) {
  const classes = useStyles();

  return (
    <Grid container elevation={8} sx={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList movies={movies}  />
      </Grid>
    </Grid>
  );

}
export default TemplateFantasyListPage;
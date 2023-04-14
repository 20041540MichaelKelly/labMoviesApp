import React from "react";
import MovieHeader from "../../movies/headerMovie";
import Grid from "@mui/material/Grid";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const FantasyTemplate = ({ movie, children }) => {

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default FantasyTemplate;
import React, { useState } from "react";
import FilterCard from "../../movies/filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

export const titleFilter = function (movie, value) {
  return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (movie, value) {
  const genreId = Number(value);
  return genreId > 0 ? movie.genre_ids.includes(genreId) : true;
};

export const voteFilter = function (movie, value) {
 return value > 0 ? movie.vote_average>= value : true;
};

export const languageFilter = function (movie, value) {
  return movie.original_language.toLowerCase().search(value.toLowerCase()) !== -1;
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

const MovieFilterUI = ({ onFilterValuesChange, titleFilter, genreFilter, voteFilter, languageFilter}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          voteFilter={voteFilter}
          languageFilter={languageFilter}

        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
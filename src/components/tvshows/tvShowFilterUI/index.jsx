import React, { useState } from "react";
import FilterCard from "../filterTvShowCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ReusableStyles from "../../../reusableStyles";

export const tvTitleFilter = function (tvShow, value) {
  return tvShow.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const tvGenreFilter = function (tvShow, value) {
  const genreId = Number(value);
  return genreId > 0 ? tvShow.genre_ids.includes(genreId) : true;
};

export const tvVoteFilter = function (tvShow, value) {
 return value > 0 ? tvShow.vote_average>= value : true;
};

const TvShowFilterUI = ({ onFilterValuesChange, tvTitleFilter, tvGenreFilter, tvVoteFilter, tvLanguageFilter}) => {
const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={ReusableStyles.fab}
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
          tvTitleFilter={tvTitleFilter}
          tvGenreFilter={tvGenreFilter}
          tvVoteFilter={tvVoteFilter}
        />
      </Drawer>
    </>
  );
};

export default TvShowFilterUI;
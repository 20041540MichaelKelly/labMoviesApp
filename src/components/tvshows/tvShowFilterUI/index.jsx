import React, { useState } from "react";
import FilterCard from "../filterTvShowCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ReusableStyles from "../../../reusableStyles";

export const titleFilter = function (tvShow, value) {
  return tvShow.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (tvShow, value) {
  const genreId = Number(value);
  return genreId > 0 ? tvShow.genre_ids.includes(genreId) : true;
};

export const voteFilter = function (tvShow, value) {
 return value > 0 ? tvShow.vote_average>= value : true;
};

export const languageFilter = function (tvShow, value) {
  return tvShow.original_language.toLowerCase().search(value.toLowerCase()) !== -1;
};


const TvShowFilterUI = ({ onFilterValuesChange, titleFilter, genreFilter, voteFilter, languageFilter, productionCountryFilter}) => {
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
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          voteFilter={voteFilter}
          languageFilter={languageFilter}
        />
      </Drawer>
    </>
  );
};

export default TvShowFilterUI;
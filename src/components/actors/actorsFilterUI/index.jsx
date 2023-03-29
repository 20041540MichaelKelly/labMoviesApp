import React, { useState } from "react";
import FilterCard from "../filterActorsCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";

// export const titleFilter = function (movie, value) {
//   return movie.title.toLowerCase().search(value.toLowerCase()) !== -1;
// };

export const genderFilter = function (actor, value) {
  const genderId = Number(value);
  return genderId > 0 ? actor.gender.includes(genderId) : true;
};

// export const voteFilter = function (movie, value) {
//  return value > 0 ? movie.vote_average>= value : true;
// };

export const nameFilter = function (actor, value) {
  return actor.name.toLowerCase().search(value.toLowerCase()) !== -1;
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

const ActorsFilterUI = ({ onFilterValuesChange, nameFilter, actors}) => {
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
        //   titleFilter={titleFilter}
          genderFilter={genderFilter}
          nameFilter={nameFilter}
          actors={actors}
        />
      </Drawer>
    </>
  );
};

export default ActorsFilterUI;
import React, { useState } from "react";
import FilterCard from "../filterActorsCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ReusableStyles from "../../../reusableStyles";

export const genderFilter = function (actor, value) {
  const genderId = Number(value);
  return genderId > 0 ? actor.gender ===genderId  : true;
};

export const nameFilter = function (actor, value) {
  return actor.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
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
          genderFilter={genderFilter}
          nameFilter={nameFilter}
          actors={actors}
        />
      </Drawer>
    </>
  );
};

export default ActorsFilterUI;
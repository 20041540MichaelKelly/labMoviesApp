import React, { useContext } from "react";
import { ActorsContext } from "../../contexts/actorsContext";
import IconButton from "@mui/material/IconButton";
import AddReactionIcon from '@mui/icons-material/AddReaction';

const AddToFavouriteActorsIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavouriteActors(actor);
  };
  
  return (
    <IconButton aria-label="add actor to favorites" onClick={onUserSelect}>
      <AddReactionIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteActorsIcon;
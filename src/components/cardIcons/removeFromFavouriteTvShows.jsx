import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvShowContext } from "../../contexts/tvShowContext";

const RemoveFromFavouriteTvShowsIcon = ({ tvShow }) => {
  const context = useContext(TvShowContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromFavouriteTvShows(tvShow);
  };

return (
  <IconButton
    aria-label="remove from favorite TV Shows"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouriteTvShowsIcon;

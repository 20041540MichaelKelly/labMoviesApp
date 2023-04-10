import React, { useContext } from "react";
import { TvShowContext } from "../../contexts/tvShowContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/PlaylistAdd";

const AddToTvShowPlaylistIcon = ({ tvShow }) => {
  const context = useContext(TvShowContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToTvShowPlaylist(tvShow);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvShowPlaylistIcon;

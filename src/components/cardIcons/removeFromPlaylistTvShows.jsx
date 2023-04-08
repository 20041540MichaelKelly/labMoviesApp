import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvShowContext } from "../../contexts/tvShowContext";

const RemoveFromPlaylistTvShowIcon = ({ tvShow }) => {
  const context = useContext(TvShowContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromTvShowPlaylist(tvShow);
  };

return (
  <IconButton
    aria-label="remove from TV Show playlist"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromPlaylistTvShowIcon;

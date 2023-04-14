import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import ReusableStyles from "../../../reusableStyles";

const MovieHeader = (props) => {
  const movie = props.movie;
  let fave = null
  if(localStorage.favourites !== '[]') {
     fave = localStorage.favourites
  }

  const tagline = movie.tagline ? movie.tagline : '';

  return (
    <Paper component="div" sx={ReusableStyles.headerRoot}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      <CardHeader avatar={
          fave ? (
            <Avatar sx={ReusableStyles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        } />
      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{tagline} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
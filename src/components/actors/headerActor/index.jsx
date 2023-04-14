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

const ActorHeader = (props) => {
  const actor = props.actor;
  let fave = null
  if(localStorage.favourites !== '[]') {
     fave = localStorage.favourites
  }

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
        {actor.name}{"   "}
        <a href={actor.homepage}> 
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;
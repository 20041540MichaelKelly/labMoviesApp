import React from "react";
import Typography from "@mui/material/Typography";

const ActorDetails = ( {actor}) => {

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
    </>
  );
};
export default  ActorDetails ;
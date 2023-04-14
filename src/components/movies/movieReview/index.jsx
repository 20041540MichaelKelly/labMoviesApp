import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const MovieReview = ({ review }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                Review By: {review.author}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                {review.content}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default MovieReview
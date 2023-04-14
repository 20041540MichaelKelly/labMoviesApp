import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../../images/film-poster-placeholder.png';
import Avatar from "@mui/material/Avatar";
import BadgeIcon from '@mui/icons-material/Badge';
import { ActorsContext } from "../../../contexts/actorsContext";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ReusableStyles from "../../../reusableStyles";
import { useNavigate } from "react-router-dom";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function ActorCard({ actor, action }) {
  const { favouriteActors, addToFavouriteActors } = useContext(ActorsContext);
  const navigate = useNavigate();

  const handleClick = (pageURL) => {
    navigate(pageURL);
  };

  if (favouriteActors.find((id) => id === actor.id)) {
    actor.favourite = true;
  } else {
    actor.favourite = false
  }
  
  return (
    <Card sx={ReusableStyles.cardHover}>
      <Box onClick={() => { handleClick(`/person/${actor.id}`) }}>
        <CardHeader
          sx={styles.header}
          avatar={
            actor.favourite ? (
              <Avatar sx={styles.avatar}>
                <AddReactionIcon />
              </Avatar>
            ) : null
          }
          title={
            <Typography variant="h5" component="p">
              {actor.name}{" "}
            </Typography>
          }
        />
        
        <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />

        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <BadgeIcon fontSize="small" />
                {actor.name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {actor.popularity}{" "}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        </ Box>
        <CardActions disableSpacing>
          {action ? action(actor) : null}
        </CardActions>
    </Card>
  );
}

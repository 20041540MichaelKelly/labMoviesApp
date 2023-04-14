import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../../images/film-poster-placeholder.png';
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
 import { TvShowContext } from "../../../contexts/tvShowContext";
 import { AvatarGroup } from "@mui/material";
import ReusableStyles from "../../../reusableStyles";
import Box from "@mui/material/Box";


const styles = {
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function TvShowCard({ tvShow, actionFav, action }) {
  const { favouriteTvShows, addToFavourites} = useContext(TvShowContext);
  const { tvShowPlaylist, addToPlaylist } = useContext(TvShowContext);
  const navigate = useNavigate();

  const handleClick = (pageURL) => {
    navigate(pageURL);
  };

  if (favouriteTvShows.find((id) => id === tvShow.id)) {
    tvShow.favourite = true;
  } else {
    tvShow.favourite = false
  }

  if (tvShowPlaylist.find((id) => id === tvShow.id)) {
    tvShow.playlist = true;
  } else {
    tvShow.playlist = false
  }

  return (
      <Card sx={ReusableStyles.cardHover}>
      <Box onClick={() => {handleClick(`/tv/${tvShow.id}`)}}>
        <CardHeader
        sx={styles.header}
        avatar={
          tvShow.favourite & tvShow.playlist ? (
            <AvatarGroup>
            <Avatar sx={styles.avatar}>
              <PlaylistIcon />
            </Avatar>
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
            </AvatarGroup>
          ) : null |
          tvShow.playlist ? (
            <Avatar sx={styles.avatar}>
              <PlaylistIcon />
            </Avatar>
          ): null | 
          tvShow.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tvShow.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvShow.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.vote_count}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      </Box>
      <CardActions disableSpacing>
          {action ? action(tvShow) : null} 
          {actionFav ? actionFav(tvShow) : null}
      </CardActions>
    </Card>
  );
}

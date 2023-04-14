import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { getTvShowAggregateCredits } from "../../../api/tmdb-api";
import Spinner from '../../spinner';
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img from '../../../images/film-poster-placeholder.png';
import Image from "mui-image";
import Card from "@mui/material/Card";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../alerts/errorAlert";
import ReusableStyles from "../../../reusableStyles";
import DvrIcon from '@mui/icons-material/Dvr';
import CardActions from "@mui/material/CardActions";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvDetails = ( {tvShow}) => {
  const navigate = useNavigate();

const { data, error, isLoading, isError } = useQuery(
  ["tvCast", { id: tvShow.id }],
  getTvShowAggregateCredits
);

const handleClick = (pageURL) => {
  navigate(pageURL);
};

if (isLoading) {
  return <Spinner />;
}

if (isError) {
  return <ErrorAlert message={error.message} />
}

const credits = data ? data.cast : [];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

return (
  <>
    <Card sx={{ boxShadow: 3, my:2, mx:2 }}>
      <Typography variant="h5" component="h3" sx={{fontWeight: 'bold'}}>
        Overview
      </Typography>

      <Typography variant="h6" component="p" sx={{ my:2, mx:2 }}>
        {tvShow.overview}
      </Typography>
    
    <Card component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Card>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${tvShow.episode_run_time} min.`} />
        <Chip
          icon={<DvrIcon />}
          label={`Season(s): ${tvShow.number_of_seasons} `}
        />
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average} (${tvShow.vote_count}`}
        />
        <Chip label={`Released: ${tvShow.first_air_date}`} />
        <CardActions disableSpacing>
        <Link to={`/tv/${tvShow.id}/similar`}>
          <Button variant="outlined" size="medium" color="primary">
            Similar TV Shows ...
          </Button>
        </Link>
          <Button onClick={()=>{handleClick(`/reviews/form/${tvShow.id}`)}} variant="outlined" size="medium" color="primary">
            Create Review ...
          </Button>
        </CardActions>
        </Paper>
        </Card>

    <Card sx={{ my:2, mx:2}}>
    <Typography variant="h5" component="h3" sx={{fontWeight: 'bold'}}>
        Cast
      </Typography>
    <ImageList sx={{ height: 700, my:2, mx:2}}
      variant="woven" cols={3} gap={8}>
      {credits.map((item) => (
        <ImageListItem sx={ReusableStyles.cardHover} key={item.profile_path} cols={item.cols || 1} rows={item.rows || 1}>
          <Image
            {...srcset(item.profile_path
              ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
              : img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onClick={() => { handleClick(`/person/${item.id}`) }}
          />
        </ImageListItem>
      ))}
    
      </ImageList>
      </Card>
    </>
  );
};

export default TvDetails;
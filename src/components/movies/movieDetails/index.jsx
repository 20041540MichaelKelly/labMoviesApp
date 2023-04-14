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
import MovieReviews from '../movieReviews';
import { getMovieCredits } from "../../../api/tmdb-api";
import Spinner from '../../spinner';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img from '../../../images/film-poster-placeholder.png';
import Image from "mui-image";
import Card from "@mui/material/Card";
import ReusableStyles from "../../../reusableStyles";

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

const MovieDetails = ( {movie}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); // New
  const navigate = useNavigate();

  const { data, error, isLoading, isError } = useQuery(
    ["cast", { id: movie.id }],
    getMovieCredits
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

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
        <CardActions disableSpacing>
        <Link to={`/movies/${movie.id}/similar`}>
          <Button variant="outlined" size="medium" color="primary">
            Similar Movies ...
          </Button>
        </Link>
          <Button onClick={()=>{handleClick(`/reviews/form/${movie.id}`)}} variant="outlined" size="medium" color="primary">
            Create Review ...
          </Button>
        </CardActions>
        </Paper>

      <Typography variant="h5" component="h3" sx={{fontWeight: 'bold'}}>
        Status
      </Typography>

      <Typography variant="h6" component="p" >
        {movie.status}
      </Typography>
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
      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails ;
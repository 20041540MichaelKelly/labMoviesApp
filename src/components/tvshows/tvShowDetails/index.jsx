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
import { getTvShowCredits } from "../../../api/tmdb-api";
import Spinner from '../../spinner';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../alerts/errorAlert";

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

//TODO: Could the below paper component be minimised out into it's own componenet

const TvDetails = ( {tvShow}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const navigate = useNavigate();

  const { data, error, isLoading, isError } = useQuery(
    ["tvCast", { id: tvShow.id }],
    getTvShowCredits
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

  const casts = data.cast

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvShow.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name}  />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet} >
        <li>
          <Chip label="Cast" sx={styles.chipLabel} color="primary" />
        </li>
        {casts.map((c) => (
          <li key={c.name}>
              <Chip label={c.name} onClick={() => {handleClick(`/person/${c.id}`)}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${tvShow.episode_run_time} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${tvShow.number_of_seasons}`}
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
        </CardActions>
      </Paper>
      {/* <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      > */}
        {/* <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer> */}
    </>
  );
};
export default  TvDetails ;
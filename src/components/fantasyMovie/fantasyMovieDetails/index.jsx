import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
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

const FantasyMovieDetails = ( {movie}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const navigate = useNavigate();

  const handleClick = (pageURL) => {
    navigate(pageURL);
  };


  
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
        <Chip icon={<AccessTimeIcon />} label={`${movie.run_time} min.`} />
        <Chip
          icon={<StarRate />}
          label={`${movie.production_company}`}
        />
        
        <Chip label={`Released: ${movie.date}`} />
        </Paper>
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
    </>
  );
};
export default  FantasyMovieDetails ;
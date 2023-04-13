import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../../supabaseClient";
import MovieIcon from '@mui/icons-material/Movie';
import PortraitIcon from '@mui/icons-material/Portrait';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';



const styles = {
  title: {
    flexGrow: 5,
  },
  appbar: {
    background: '#62d71f',
  },
  // offset: theme.mixins.toolbar,
};



const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [tvAnchorEl, setTvAnchorEl] = useState(null);
  const [movieAnchorEl, setMovieAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const openMovie = Boolean(movieAnchorEl);
  const openTv = Boolean(tvAnchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const movieMenuOptions = [
    { label: "Favorites", path: "/movies/favourites" },
    { label: "Upcoming Movies", path: "/movies/upcoming" },
    { label: "Movies Playlist", path: "/movies/playlist" },
    { label: "Popular Movies", path: "/movies/popular" },
    { label: "Now Playing", path: "/movies/playing" },
    { label: "Create a Fantasy Movie", path: "/movies/createfantasy" },
    { label: "Fantasy Movies", path: "/movies/fantasy" }

  ]

  const actorMenuOptions = [
    { label: "Favourite Actors", path: "/person/favourites" },
    { label: "Actors", path: "/person/popular" }
  ]

  const tvMenuOptions = [
    { label: "TV Shows", path: "/tv/popular" },
    { label: "TV Show Playlist", path: "/tv/playlist" },
    { label: "TV Show Favourites", path: "/tv/favourites" }
  ]

  const allMenuOptions = [...movieMenuOptions, ...actorMenuOptions, ...tvMenuOptions];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMovieClick = (event) => {
    setMovieAnchorEl(event.currentTarget);
  };

  const handleTvClick = (event) => {
    setTvAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMovieClose = () => {
    setMovieAnchorEl(null);
  };

  const handleTvClose = () => {
    setTvAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={styles.appbar} position="fixed" elevation={4} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                id="basic-button"
                aria-label="menu"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {allMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <IconButton
                aria-owns={open ? 'actor-menu' : null}
                aria-haspopup="true"
                onClick={handleMenu}
                color="contrast"
                sx={{ mr: 2, color: "white" }}
              >
                <PortraitIcon /> Actors
              </IconButton>

              <Menu
                id="actor-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'actor-button',
                }}
              >
                {actorMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    color="inherit"
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>

              <IconButton
                id="movie-button"
                aria-label="menu"
                aria-controls={openMovie ? 'movie-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMovie ? 'true' : undefined}
                onClick={handleMovieClick}
                sx={{ mr: 2, color: "white" }}
              >
                <MovieIcon /> Movies
              </IconButton>
              <Menu
                id="movie-menu"
                anchorEl={movieAnchorEl}
                open={openMovie}
                onClose={handleMovieClose}
                MenuListProps={{
                  'aria-labelledby': 'movie-button',
                }}
              >
                {movieMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                id="tv-button"
                aria-label="menu"
                aria-controls={openTv ? 'tv-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openTv ? 'true' : undefined}
                onClick={handleTvClick}
                sx={{ mr: 2, color: "white" }}
                color="white"
              >
                <LiveTvIcon /> TV
              </IconButton>
              <Menu
                id="tv-menu"
                anchorEl={tvAnchorEl}
                open={openTv}
                onClose={handleTvClose}
                MenuListProps={{
                  'aria-labelledby': 'tv-button',
                }}
              >
                {tvMenuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                key="Home"
                sx={{ mr: 2, color: "white"}}
                onClick={() => navigate("/")} >
                <HomeIcon /> Home
               </IconButton>
              <IconButton
                key="Sign Out"
                sx={{color:"white"}}
                onClick={() => supabase.auth.signOut()} >
                <LogoutIcon />Sign Out</IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default SiteHeader;

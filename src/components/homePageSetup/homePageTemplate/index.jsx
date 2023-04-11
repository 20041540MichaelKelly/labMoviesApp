import React from "react";
import Header from "../../movies/headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../../movies/movieList";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import imgHp from '../../../images/hp.jpg';
import Image from 'mui-image';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';



const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, 1fr)"
    }
}));

function MovieListPageTemplate({ movies, title, action, actionFav }) {
    const classes = useStyles();

    return (
        <Grid container elevation={8} sx={classes.root}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            <Image src={imgHp} height="40vh">
                
            </Image>
            <Autocomplete xs={12}
            sx={{my:3}}
                    id="search"
                    freeSolo
                    fullWidth
                    options={movies.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="Search" />}
                />
            <Grid item container spacing={5}>
                <MovieList action={action} movies={movies} actionFav={actionFav} />
            </Grid>
        </Grid>
    );

}
export default MovieListPageTemplate;
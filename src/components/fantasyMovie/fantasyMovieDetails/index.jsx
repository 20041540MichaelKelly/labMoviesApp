import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { supabase } from "../../../supabaseClient";
import CardMedia from "@mui/material/CardMedia";

const styles = {
    media: { height: 300 },

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

const FantasyMovieDetails = ({ movie }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (pageURL) => {
        navigate(pageURL);
    };


    const imageUrl = movie.image ? movie.image.split('\\').pop() : ""; //double dash becuse it thinks it an escape if not

    const { data: image_url } = supabase.storage.from("images").getPublicUrl(imageUrl);

    return (
        <>
            <Card sx={{ boxShadow: 3, my: 2, mx: 2 }}>

                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    Overview
                </Typography>

                <Typography variant="h6" component="p">
                    {movie.overview}
                </Typography>

                <Paper component="ul" sx={styles.chipSet}>
                    <li>
                        <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                    </li>
                    <li key={movie.genres}>
                        <Chip label={movie.genres} />
                    </li>
                </Paper>
                <Paper component="ul" sx={styles.chipSet}>
                    <Chip icon={<AccessTimeIcon />} label={`${movie.run_time} min.`} />
                    <Chip
                        icon={<StarRate />}
                        label={`${movie.production_company}`}
                    />

                    <Chip label={`Released: ${movie.date}`} />
                </Paper>
                <CardMedia
                    sx={styles.media}
                    image={image_url.publicUrl} >
                </CardMedia>

            </Card>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                <NavigationIcon />
                Reviews
            </Fab>
        </>
    );
};
export default FantasyMovieDetails;
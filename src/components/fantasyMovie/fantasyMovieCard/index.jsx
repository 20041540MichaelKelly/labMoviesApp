import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../../images/film-poster-placeholder.png'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import ReusableStyles from "../../../reusableStyles";
import { supabase } from "../../../supabaseClient";

const styles = {

    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

export default function FantasyMovieCard({ movie }) {
    const navigate = useNavigate();

    const handleClick = (pageURL) => {
        navigate(pageURL);
    };

     const imageUrl = movie.image ? movie.image.split('\\').pop() : ""; //double dash becuse it thinks it an escape if not

    const { data: image_url } = supabase.storage.from("images").getPublicUrl(imageUrl);

    return (
        <Card sx={ReusableStyles.cardHover}>
            <Box onClick={() => { handleClick(`/movies/fantasy/${movie.id}`) }}>
                <CardHeader sx={styles.header}
                    title={
                        <Typography variant="h5" component="p">
                            {movie.title}{" "}
                        </Typography>
                    }
                />
                <CardMedia
                    sx={styles.media}
                    image={image_url.publicUrl} >
                </CardMedia>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="p">
                                <CalendarIcon fontSize="small" />
                                {movie.date}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
        </Card>

    );
}

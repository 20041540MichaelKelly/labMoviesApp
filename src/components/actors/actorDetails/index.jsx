import React from "react";
import { useQuery } from "react-query";
import Typography from "@mui/material/Typography";
import { getActorCredits } from "../../../api/tmdb-api";
import Spinner from "../../spinner";
import Card from "@mui/material/Card";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img from '../../../images/film-poster-placeholder.png';
import Image from "mui-image";
import { useNavigate } from "react-router-dom";
import ReusableStyles from "../../../reusableStyles";

const ActorDetails = ({ actor }) => {
  const navigate = useNavigate();

  const { data, error, isLoading, isError } = useQuery(["credits", { id: actor.id }], getActorCredits);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const credits = data ? data.cast : [];

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const handleClick = (pageURL) => {
    navigate(pageURL);
  };

  return (
    <>
      <Card sx={{ boxShadow: 3, my:2, mx:2 }}>
        <Typography variant="h5" component="h3" sx={{fontWeight: 'bold'}}>
          Overview
        </Typography>

        <Typography variant="h6" component="p" sx={{ my:2, mx:2 }}>
          {actor.biography}
        </Typography>
      </Card>
      <Card sx={{ my:2, mx:2}}>
      <Typography variant="h5" component="h3" sx={{fontWeight: 'bold'}}>
          Starred In
        </Typography>
      <ImageList sx={{ height: 700, my:2, mx:2}}
        variant="woven" cols={3} gap={8}>
        {credits.map((item) => (
          <ImageListItem sx={ReusableStyles.cardHover} key={item.poster_path} cols={item.cols || 1} rows={item.rows || 1}>
            <Image
              {...srcset(item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              onClick={() => { handleClick(`/movies/${item.id}`) }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Card>
    </>
  );
};
export default ActorDetails;
import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movies/movieDetails";
import PageTemplate from "../components/movies/templateMoviePage";
import { getMovie } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import ErrorAlert from "../components/alerts/errorAlert";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorAlert message={error.message} />;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;

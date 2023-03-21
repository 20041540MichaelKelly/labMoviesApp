import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage'
import { getSimilarMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const SimilarMoviesPage = (props) => {
  const { id } = useParams();

  const { data: similar, error, isLoading, isError } = useQuery(
    ["similar", { id: id }],
    getSimilarMovies
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = similar ? similar.results : [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
    <PageTemplate
      title='Similar Movies'
      movies={displayedMovies}
      action={(similar) => {
        return <AddToPlaylistIcon movie={similar} />
      }}
    />
    <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
     />
    </>
  );
};
export default SimilarMoviesPage;
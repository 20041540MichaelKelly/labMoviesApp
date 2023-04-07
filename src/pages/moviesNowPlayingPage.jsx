import React from "react";
import { useQuery } from "react-query";
import PageTemplate from '../components/movies/templateMovieListPage'
import { getMoviesNowPlaying } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import { useParams } from "react-router-dom";
import Pagination from "../components/pagination";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movies/movieFilterUI";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

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

const MoviesNowPlayingPage = (props) => {
  const { page } = useParams();

  const { data, error, isLoading, isError } = useQuery(["nowPlaying", { page: page }], getMoviesNowPlaying);

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

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  const urlValue = "/movies/playing/page/";

  return (
    <>
    <PageTemplate
      title='Upcoming Movies'
      movies={displayedMovies}
      actionFav={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      action={(movie) => {
       return <AddToPlaylistIcon movie={movie} />
     }}
    />
    <Pagination urlValue = { urlValue } pg={ page }/>
    <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
     />
    </>
  );
};
export default MoviesNowPlayingPage;

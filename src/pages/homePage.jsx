import React, { useState } from "react";
import PageTemplate from "../components/homePageSetup/homePageTemplate";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import { useParams } from "react-router-dom";

import MovieFilterUI, {
  titleFilter,
  genreFilter,
  voteFilter,
  languageFilter
} from "../components/movies/movieFilterUI";

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

const voteFiltering = {
  name: "vote",
  value: "0",
  condition: voteFilter,
};

const languageFiltering = {
  name: "language",
  value: "",
  condition: languageFilter,
};

const HomePage = (props) => {
  const { page } = useParams();

  const { data, error, isLoading, isError } = useQuery(["discover", { page: page }], getMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering, voteFiltering, languageFiltering]
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
      type === "title" ?
        [changedFilter, filterValues[1], filterValues[2], filterValues[3]] : null |
          type === "genre" ?
          [filterValues[0], changedFilter, filterValues[2], filterValues[3]] : null |
            type === "vote" ?
            [filterValues[0], filterValues[1], changedFilter, filterValues[3]] : null |
              type === "language" ?
              [filterValues[0], filterValues[1], filterValues[2], changedFilter] : null
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);
  const urlValue = "movies/page/";

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={displayedMovies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />
        }}
        actionFav={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        voteFilter={filterValues[2].value}
        languageFilter={filterValues[3].value}
      />
    </>
  );
};

export default HomePage;

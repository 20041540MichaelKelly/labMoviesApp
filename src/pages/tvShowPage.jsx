import React from "react";
import TvShowListPage from "../components/tvshows/templateTvShowListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTvShows } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import AddToFavouritesIcon from '../components/cardIcons/addToFavouriteTvShows';
import AddToPlaylistIcon from '../components/cardIcons/addToTvShowPlaylist';
import { useParams } from "react-router-dom";
import Pagination from "../components/pagination";

import TvShowFilterUI, {
  titleFilter,
  genreFilter,
  voteFilter,
  languageFilter
} from "../components/tvshows/tvShowFilterUI";

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

 const TvShowPage = (props) => {
  const { page } = useParams();
  const { data, error, isLoading, isError } = useQuery(["tvShows", { page: page }], getTvShows);
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
        [changedFilter, filterValues[1], filterValues[2], filterValues[3], filterValues[4]] : null |
          type === "genre" ?
          [filterValues[0], changedFilter, filterValues[2], filterValues[3], filterValues[4]] : null |
            type === "vote" ?
            [filterValues[0], filterValues[1], changedFilter, filterValues[3], filterValues[4]] : null |
              type === "language" ?
              [filterValues[0], filterValues[1], filterValues[2], changedFilter, filterValues[4]] : null |
    setFilterValues(updatedFilterSet);
  };

  const tvShows = data ? data.results : [];
  const urlValue = "/tv/popular/page/";
  const displayedTvShows = filterFunction(tvShows);

  return (
    <>
     <TvShowListPage
       title="Discover TV Shows"
       tvShows={displayedTvShows}
       actionFav={(tvShow) => {
         return <AddToFavouritesIcon tvShow={tvShow} />
       }}
       action={(tvShow) => {
        return <AddToPlaylistIcon tvShow={tvShow} />
      }}
     />
      <Pagination urlValue = { urlValue } pg={ page } />
      <TvShowFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        voteFilter={filterValues[2].value}
        languageFilter={filterValues[3].value}
      />
    </>
  );
};

export default TvShowPage;

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
  tvTitleFilter,
  tvGenreFilter,
  tvVoteFilter,
} from "../components/tvshows/tvShowFilterUI";

const tvTitleFiltering = {
  name: "tvTitle",
  value: "",
  condition: tvTitleFilter,
};
const tvGenreFiltering = {
  name: "tvGenre",
  value: "0",
  condition: tvGenreFilter,
};

const tvVoteFiltering = {
  name: "tvVote",
  value: "0",
  condition: tvVoteFilter,
};

const TvShowPage = (props) => {
  const { page } = useParams();
  const { data, error, isLoading, isError } = useQuery(["tvShows", { page: page }], getTvShows);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [tvTitleFiltering, tvGenreFiltering, tvVoteFiltering]
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
      type === "tvTitle" ?
        [changedFilter, filterValues[1], filterValues[2]] : null |
          type === "tvGenre" ?
          [filterValues[0], changedFilter, filterValues[2]] : null |
            type === "tvVote" ?
            [filterValues[0], filterValues[1], changedFilter] : null |
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
      <Pagination urlValue={urlValue} pg={page} />
      <TvShowFilterUI
        onFilterValuesChange={changeFilterValues}
        tvTitleFilter={filterValues[0].value}
        tvGenreFilter={filterValues[1].value}
        tvVoteFilter={filterValues[2].value}
      />
    </>
  );
};

export default TvShowPage;

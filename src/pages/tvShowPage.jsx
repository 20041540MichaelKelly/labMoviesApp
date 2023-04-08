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

// import MovieFilterUI, {
//   titleFilter,
//   genreFilter,
//   voteFilter,
// } from "../components/movies/movieFilterUI";

// const titleFiltering = {
//   name: "title",
//   value: "",
//   condition: titleFilter,
// };
// const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: genreFilter,
// };

// const voteFiltering = {
//   name: "vote",
//   value: "0",
//   condition: voteFilter,
// };

 const TvShowPage = (props) => {
  const { page } = useParams();
  const { data, error, isLoading, isError } = useQuery(["tvShows", { page: page }], getTvShows);
//   const { filterValues, setFilterValues, filterFunction } = useFiltering(
//     [],
//     [titleFiltering, genreFiltering]
//   );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

//   const changeFilterValues = (type, value) => {
//     const changedFilter = { name: type, value: value };
//     const updatedFilterSet =
//       type === "title"
//         ? [changedFilter, filterValues[1]]
//         : [filterValues[0], changedFilter];
//     setFilterValues(updatedFilterSet);
//   };

  const tvShows = data ? data.results : [];
  const urlValue = "/tv/popular/page/"
  //const displayedMovies = filterFunction(movies);

  return (
    <>
     <TvShowListPage
       title="Discover TV Shows"
       tvShows={tvShows}
       actionFav={(tvShow) => {
         return <AddToFavouritesIcon tvShow={tvShow} />
       }}
       action={(tvShow) => {
        return <AddToPlaylistIcon tvShow={tvShow} />
      }}
     />
      <Pagination urlValue = { urlValue } pg={ page } />
    </>
  );
};

export default TvShowPage;

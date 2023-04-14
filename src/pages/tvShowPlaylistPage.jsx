import React, { useContext } from "react";
import PageTemplate from "../components/tvshows/templateTvShowListPage";
import { TvShowContext } from "../contexts/tvShowContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../components/movies/movieFilterUI";
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylistTvShows";
import WriteReview from "../components/cardIcons/writeReview";

// const titleFiltering = {
//   name: "title",
//   value: "",
//   condition: titleFilter,
// };
// export const genreFiltering = {
//   name: "genre",
//   value: "0",
//   condition: function (movie, value) {
    
//     const genreId = Number(value);
//     const genre_ids = movie.genres.map((g) => g.id);
//     return genreId > 0 ? genre_ids.includes(genreId) : true;
//   },
// };

const TvShowPlaylistPage = () => {
  const { tvShowPlaylist: tvShowIds } = useContext(TvShowContext);
//   const { filterValues, setFilterValues, filterFunction } = useFiltering(
//     [],
//     [titleFiltering, genreFiltering]
//   );

  // Create an array of queries and run them in parallel.
  const tvShowPlaylistQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return { 
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = tvShowPlaylistQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allPlaylist = tvShowPlaylistQueries.map((q) => q.data);
  const displayTvShows = allPlaylist
    // ? filterFunction(allPlaylist)
    // : [];

//   const changeFilterValues = (type, value) => {
//     const changedFilter = { name: type, value: value };
//     const updatedFilterSet =
//       type === "title"
//         ? [changedFilter, filterValues[1]]
//         : [filterValues[0], changedFilter];
//     setFilterValues(updatedFilterSet);
//   };

  return (
    <>
      <PageTemplate
        title="TV Show Playlist"
        tvShows={displayTvShows}
        action={(tvShow) => {
          return (
            <>
              <RemoveFromPlaylist tvShow={tvShow} />
              {/* <WriteReview movie={movie} /> */}
            </>
          );
        }}
       />
    {/* //   <MovieFilterUI
    //     onFilterValuesChange={changeFilterValues}
    //     titleFilter={filterValues[0].value}
    //     genreFilter={filterValues[1].value}
    //   /> */}
    </>
  );
};

export default TvShowPlaylistPage;

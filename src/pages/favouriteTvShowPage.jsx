import React, { useContext } from "react";
import PageTemplate from "../components/tvshows/templateTvShowListPage";
import { TvShowContext } from "../contexts/tvShowContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../components/movies/movieFilterUI";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavouriteTvShows";
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
//     // Is user selected genre in this movies's genre list? 
//     // Always true if selected genre ia All (0).
//     const genreId = Number(value);
//     const genre_ids = movie.genres.map((g) => g.id);
//     return genreId > 0 ? genre_ids.includes(genreId) : true;
//   },
// };

const FavouriteTvShowPage = () => {
  const { favouriteTvShows: tvShowIds } = useContext(TvShowContext);
//   const { filterValues, setFilterValues, filterFunction } = useFiltering(
//     [],
//     [titleFiltering, genreFiltering]
//   );

  // Create an array of queries and run them in parallel.
  const favouriteTvShowQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteTvShowQueries.map((q) => q.data);
  const displayTvShows = allFavourites
    // ? filterFunction(allFavourites)
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
        title="Favourite TV Shows"
        tvShows={displayTvShows}
        actionFav={(tvShow) => {
          return (
            <>
              <RemoveFromFavourites tvShow={tvShow} />
              {/* <WriteReview movie={movie} /> */}
            </>
          );
        }}
        action={null}
      />
      {/* <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      /> */}
    </>
  );
};

export default FavouriteTvShowPage;

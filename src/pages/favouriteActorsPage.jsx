import React, { useContext } from "react";
import PageTemplate from "../components/actors/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter } from "../components/movies/movieFilterUI";
import RemoveFromFavouriteActors from "../components/cardIcons/removeFromFavouriteActors";
import WriteReview from "../components/cardIcons/writeReview";

// const titleFiltering = {
//   name: "title",
//   value: "",
//   condition: titleFilter,
// };

const FavouriteActorsPage = () => {
  const { favouriteActors: actorIds } = useContext(ActorsContext);
  // const { filterValues, setFilterValues, filterFunction } = useFiltering(
  //   [],
  //   [titleFiltering, genreFiltering]
  // );

  // Create an array of queries and run them in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteActorQueries.map((q) => q.data);
  const displayActors = allFavourites
    // ? filterFunction(allFavourites)
    // : [];

  // const changeFilterValues = (type, value) => {
  //   const changedFilter = { name: type, value: value };
  //   const updatedFilterSet =
  //     type === "title"
  //       ? [changedFilter, filterValues[1]]
  //       : [filterValues[0], changedFilter];
  //   setFilterValues(updatedFilterSet);
  // };

  return (
    <>
      <PageTemplate
        title="Favourite Movies"
        actors={ displayActors }
        actionFav={(actor) => {
          return (
            <>
              <RemoveFromFavouriteActors actor={ actor } />
            </>
          );
        }}
      />
      {/* <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      /> */}
    </>
  );
};

export default FavouriteActorsPage;

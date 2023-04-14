import React, { useContext } from "react";
import PageTemplate from "../components/actors/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavouriteActors from "../components/cardIcons/removeFromFavouriteActors";

const FavouriteActorsPage = () => {
  const { favouriteActors: actorIds } = useContext(ActorsContext);

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

  return (
    <>
      <PageTemplate
        title="Favourite Actors"
        actors={ displayActors }
        actionFav={(actor) => {
          return (
            <>
              <RemoveFromFavouriteActors actor={ actor } />
            </>
          );
        }}
      />
    </>
  );
};

export default FavouriteActorsPage;

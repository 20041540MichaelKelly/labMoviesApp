import React from "react";
import PageTemplate from "../components/actors/templateActorListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getActors } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import { useParams } from "react-router-dom";
import Pagination from "../components/pagination";
import AddToFavouriteActorsIcon from '../components/cardIcons/addToFavouriteActors';

import ActorFilterUI, {
  nameFilter,
  genderFilter
} from "../components/actors/actorsFilterUI";

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

const genderFiltering = {
  name: "gender",
  value: "",
  condition: genderFilter,
};

const ActorsPage = (props) => {
  const { page } = useParams();

  const { data, error, isLoading, isError } = useQuery(["actors", { page: page }], getActors);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [nameFiltering, genderFiltering]
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
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const actors = data ? data.results : [];
  const displayedActors = filterFunction(actors);
  const urlValue = "/person/popular/page/"

  return (
    <>
     <PageTemplate
       title="Famous People"
       actors={displayedActors}
       action={(actor) => {
        return <AddToFavouriteActorsIcon actor={actor} />
      }}
     />
      <Pagination urlValue = { urlValue } pg={ page }/>
       <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genderFilter={filterValues[1].value}
        actors={actors}
      /> 
    </>
  );
};

export default ActorsPage;
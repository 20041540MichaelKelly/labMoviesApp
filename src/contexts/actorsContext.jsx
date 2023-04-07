import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favouriteActors, setFavouriteActors] = useState([]);

  /**
   * 
   * Implementation of Favourites
   */
  
  const addToFavouriteActors = (actor) => {
    let updatedFavourites = [...favouriteActors];
    if (!favouriteActors.includes(actor.id)) {
      updatedFavourites.push(actor.id);
    }
    setFavouriteActors(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavouriteActors = (actor) => {
    setFavouriteActors(favouriteActors.filter((aId) => aId !== actor.id));
  };

 return (
    <ActorsContext.Provider
      value={{
        favouriteActors,
        addToFavouriteActors,
        removeFromFavouriteActors
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
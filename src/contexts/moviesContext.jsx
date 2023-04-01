import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [myReviews, setMyReviews] = useState( {} )  

  /**
   * 
   * Implementation of Favourites
   */
  
  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  /**
   * 
   * Implementation of Playlist
   */

  const addToPlaylist = (movie) => {
    let updatedPlaylist = [...playlist];
    if (![playlist].includes(movie.id)) {
      updatedPlaylist.push(movie.id);
    }
    setPlaylist(updatedPlaylist);
  };

  const removeFromPlaylist = (movie) => {
    setPlaylist(playlist.filter((mId) => mId !== movie.id));
  };

  /**
   * 
   * Implementation of Reviews
   */

  const addReview = (movie, review) => {   
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        playlist,
        addToFavourites,
        removeFromFavourites,
        addReview,    
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
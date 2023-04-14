import React, { useState } from "react";

export const TvShowContext = React.createContext(null);

const TvShowContextProvider = (props) => {
  const [favouriteTvShows, setFavouriteTvShows] = useState([]);
  const [tvShowPlaylist, setTvShowPlaylist] = useState([]);
//   const [myReviews, setMyReviews] = useState( {} )  

  /**
   * 
   * Implementation of Favourites
   */
  
  const addToFavouriteTvShows = (tvShow) => {
    let updatedFavourites = [...favouriteTvShows];
    if (!favouriteTvShows.includes(tvShow.id)) {
      updatedFavourites.push(tvShow.id);
    }
    setFavouriteTvShows(updatedFavourites);
  };

  // We will use this function in a later section
  const removeFromFavouriteTvShows = (tvShow) => {
    setFavouriteTvShows(favouriteTvShows.filter((tId) => tId !== tvShow.id));
  };

  /**
   * 
   * Implementation of Playlist
   */

  const addToTvShowPlaylist = (tvShow) => {
    let updatedPlaylist = [...tvShowPlaylist];
    if (![tvShowPlaylist].includes(tvShow.id)) {
      updatedPlaylist.push(tvShow.id);
    }
    setTvShowPlaylist(updatedPlaylist);
  };

  const removeFromTvShowPlaylist = (tvShow) => {
    setTvShowPlaylist(tvShowPlaylist.filter((tId) => tId !== tvShow.id));
  };

  /**
   * 
   * Implementation of Reviews
   */

//   const addReview = (tvShow, review) => {   
//     setMyReviews( {...myReviews, [tvShow.id]: review } )
//   };

 return (
    <TvShowContext.Provider
      value={{
        favouriteTvShows,
        tvShowPlaylist,
        addToFavouriteTvShows,
        removeFromFavouriteTvShows,
        //addReview,    
        addToTvShowPlaylist,
        removeFromTvShowPlaylist,
      }}
    >
      {props.children}
    </TvShowContext.Provider>
  );
};

export default TvShowContextProvider;
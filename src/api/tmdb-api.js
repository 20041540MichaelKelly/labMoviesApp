export const getMovies = ({ queryKey }) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
  export const getMovie = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getVotes = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const postMovieReviews = ({data}) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
        , {
          method: 'POST',
      
      body: JSON.stringify({data})
    }).then(res => res.json())
      .then(res => console.log(res));
  };

  export const getUpcomingMovies = ({queryKey}) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    page ? page : 1;
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
         throw error
      });
    };

    export const getMoviesNowPlaying = ({queryKey}) => {
      const [, pagePart] = queryKey;
      const { page } = pagePart;
      page ? page : 1;
      return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };

    export const getPopularMovies = ({queryKey}) => {
      const [, pagePart] = queryKey;
      const { page } = pagePart;
      page ? page : 1;
      return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.json().message);
          }
          return response.json();
        })
        .catch((error) => {
           throw error
        });
      };

      export const getMovieCredits = ( {queryKey} ) => {
       const [, idPart] = queryKey;
       const { id } = idPart;
        return fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })
          .catch((error) => {
             throw error
          });
        };

        export const getSimilarMovies = ( {queryKey} ) => {
          const [, idPart] = queryKey;
          const { id } = idPart;
           return fetch(
             `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
             ).then((response) => {
               if (!response.ok) {
                 throw new Error(response.json().message);
               }
               return response.json();
             })
             .catch((error) => {
                throw error
             });
           };


 /**
  * ********************PEOPLE SECTION***************************** */    
 
 export const getActors = ({queryKey}) => {
  const [, pagePart] = queryKey;
  const { page } = pagePart;
  page ? page : 1;
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=${page}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getActor = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getActorCredits = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getActorImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getGenders = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  /*----------------Tv Shows--------------------------*/

  export const getTvShows = ({queryKey}) => {
    const [, pagePart] = queryKey;
    const { page } = pagePart;
    page ? page : 1;
    return fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
    
    export const getTvShow= ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
      ).then(res => res.json());
    };
    
    export const getTvShowImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
      return fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error
     });
    };

    export const getTvShowCredits = ( {queryKey} ) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
       return fetch(
         `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
         ).then((response) => {
           if (!response.ok) {
             throw new Error(response.json().message);
           }
           return response.json();
         })
         .catch((error) => {
            throw error
         });
       };

       export const getTvShowAggregateCredits = ( {queryKey} ) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
         return fetch(
           `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
           ).then((response) => {
             if (!response.ok) {
               throw new Error(response.json().message);
             }
             return response.json();
           })
           .catch((error) => {
              throw error
           });
         };

       export const getSimilarTvShows = ( {queryKey} ) => {
        const [, idPart] = queryKey;
        const { id } = idPart;
         return fetch(
           `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
           ).then((response) => {
             if (!response.ok) {
               throw new Error(response.json().message);
             }
             return response.json();
           })
           .catch((error) => {
              throw error
           });
         };

         export const getTvGenres = async () => {
          return fetch(
            "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
              import.meta.env.VITE_TMDB_KEY +
              "&language=en-US"
          ).then( (response) => {
            if (!response.ok) {
              throw new Error(response.json().message);
            }
            return response.json();
          })
          .catch((error) => {
            throw error
         });
        };
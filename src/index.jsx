import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MoviePlaylistPage from "./pages/moviePlaylistPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MostPopularMoviesPage from './pages/mostPopularMoviesPage';
import MoviesNowPlayingPage from './pages/moviesNowPlayingPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import ActorsPage from './pages/actorsPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import TvShowPage from './pages/tvShowPage';
import SignUp from './pages/signupPage';
import PrivateRoute from "./components/privateRoute";
import Login from "./components/loginTemplate";
import TvShowDetails from "./pages/tvShowDetails";
import SimilarTvShowsPage from "./pages/similarTvShows";
import FantasyMoviePage from "./pages/fantasyMoviePage";
import TvShowContextProvider from "./contexts/tvShowContext";
import FavouriteTvShowPage from "./pages/favouriteTvShowPage";
import TvShowPlaylistPage from "./pages/tvShowPlaylistPage";
import UpdateUser from "./components/userAccount/updateUser";
import DisplayFantasyMoviePage from "./pages/displayFantasyMoviePage";
import FantasyMovieDetailsPage from "./pages/fantasyMovieDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MoviesContextProvider>
          <ActorsContextProvider>
            <TvShowContextProvider>
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                 <Route element={<PrivateRoute />  }>
                  <Route path="/update" element={<UpdateUser />} />
                  <Route path="/tv/favourites" element={<FavouriteTvShowPage />} />
                  <Route path="/tv/playlist" element={<TvShowPlaylistPage />} />
                  <Route path="/tv/:id/similar" element={<SimilarTvShowsPage />} />
                  <Route path="/tv/:id" element={<TvShowDetails />} />
                  <Route path="/tv/popular" element={<TvShowPage />} />
                  <Route path="/tv/popular/page/:page" element={<TvShowPage />} />
                  <Route path="/person/favourites" element={<FavouriteActorsPage />} />
                  <Route path="/person/:id" element={<ActorDetailsPage />} />
                  <Route path="/person/popular" element={<ActorsPage />} />
                  <Route path="/person/popular/page/:page" element={<ActorsPage />} />
                  <Route path="/reviews/form/:id" element={<AddMovieReviewPage />} />
                  <Route path="/reviews/:id" element={<MovieReviewPage />} />
                  <Route path="/movies/fantasy/:id" element={<FantasyMovieDetailsPage />} />
                  <Route path="/movies/fantasy" element={<DisplayFantasyMoviePage />} />
                  <Route path="/movies/createfantasy" element={<FantasyMoviePage />} />
                  <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
                  <Route path="/movies/playing" element={<MoviesNowPlayingPage />} />
                  <Route path="/movies/playing/page/:page" element={<MoviesNowPlayingPage />} />
                  <Route path="/movies/playlist" element={<MoviePlaylistPage />} />
                  <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                  <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                  <Route path="/movies/upcoming/page/:page" element={<UpcomingMoviesPage />} />
                  <Route path="/movies/popular" element={<MostPopularMoviesPage />} />
                  <Route path="/movies/popular/page/:page" element={<MostPopularMoviesPage />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/movies/:id" element={<MoviePage />} />
                  {/* <Route path="/movies/page/:page" element={<HomePage />} /> */}
                  <Route path="*" element={<Navigate to="/" />} />
                  <Route path="#" element={<Navigate to="/" />} />
                </Route> 
              </Routes>
            </TvShowContextProvider>
          </ActorsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

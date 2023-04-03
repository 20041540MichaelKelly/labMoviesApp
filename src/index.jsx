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
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import MostPopularMoviesPage from './pages/mostPopularMoviesPage';
import MoviesNowPlayingPage from './pages/moviesNowPlayingPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import ActorsPage from './pages/actorsPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import TvShowPage from './pages/tvShowPage';
import SignUp from './pages/signupPage';
import PrivateRoute from "./components/privateRoute";
import Login from "./components/loginTemplate";

import WithNav from "./components/showSiteHeader";
import WithoutNav from "./components/hideSiteHeader";

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
      <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<Login/>} />
              <Route element={<PrivateRoute/>}>
                <Route path="/tv/popular" element={<TvShowPage/>} />
                <Route path="/person/:id" element={<ActorDetailsPage/>} />
                <Route path="/person/popular" element={<ActorsPage/>} />
                <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
                <Route path="/movies/playing" element={<MoviesNowPlayingPage />} />
                <Route path="/movies/playlist" element={<MoviePlaylistPage />} />
                <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/movies/page/:page" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="#" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          </MoviesContextProvider>
      </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

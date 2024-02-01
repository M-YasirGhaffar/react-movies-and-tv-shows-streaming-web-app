import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import tvShowsReducer from '../features/tvShows/tvShowsSlice';
import trendingMoviesReducer from '../features/trendingMovies/trendingMoviesSlice';
import trendingTvShowsReducer from '../features/trendingTvShows/trendingTvShowsSlice';
import topRatedMoviesReducer from '../features/topRatedMovies/topRatedMoviesSlice';
import topRatedTvShowsReducer from '../features/topRatedTvShows/topRatedTvShowsSlice';
import allReducer from '../features/all/allSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    trendingMovies: trendingMoviesReducer,
    trendingTvShows: trendingTvShowsReducer,
    topRatedMovies: topRatedMoviesReducer,
    topRatedTvShows: topRatedTvShowsReducer,
    all: allReducer,
  },
});


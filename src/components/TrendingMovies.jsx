import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../features/trendingMovies/trendingMoviesSlice';
import MoviesWrapper from './wrappers/MoviesWrapper'; // Reuse the MoviesWrapper component

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.trendingMovies.movies);
  const status = useSelector((state) => state.trendingMovies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrendingMovies());
    }
  }, [status, dispatch]);

  return (
    <>
      <MoviesWrapper movies={movies} isLoading={status === 'loading'} />
    </>
  );
};

export default TrendingMovies;

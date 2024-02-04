import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies } from '../features/topRatedMovies/topRatedMoviesSlice';
import MoviesWrapper from './wrappers/MoviesWrapper'; // Reuse the MoviesWrapper component

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.trendingMovies.movies);
  const status = useSelector((state) => state.trendingMovies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopRatedMovies());
    }
  }, [status, dispatch]);

  return (
    <>
      <MoviesWrapper movies={movies} isLoading={status === 'loading'} />
    </>
  );
};

export default TopRatedMovies;

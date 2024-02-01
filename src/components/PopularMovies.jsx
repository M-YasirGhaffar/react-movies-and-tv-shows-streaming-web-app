import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../features/movies/moviesSlice';
import MoviesWrapper from './MoviesWrapper'; // Import MoviesWrapper

const PopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPopularMovies());
    }
  }, [status, dispatch]);

  // Now, PopularMovies only fetches the data and passes it to MoviesWrapper for rendering
  return <>
    <MoviesWrapper componentTitle={'Popular Movies'} movies={movies} isLoading={status === 'loading'} />
  </>;
};

export default PopularMovies;

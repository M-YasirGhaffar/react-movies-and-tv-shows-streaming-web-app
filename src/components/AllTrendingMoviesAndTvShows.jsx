import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../features/all/allSlice';
import ScrollingWrapper from './wrappers/ScrollingWrapper';

const AllTrendingMoviesAndTvShows = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.all.movies);
  const status = useSelector((state) => state.all.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAll());
    }
  }, [status, dispatch]);

  return (
    <>
      <ScrollingWrapper movies={movies} isLoading={status === 'loading'} />
    </>
  );
};

export default AllTrendingMoviesAndTvShows;

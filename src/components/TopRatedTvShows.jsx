import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedTvShows } from '../features/topRatedTvShows/topRatedTvShowsSlice';
import MoviesWrapper from './MoviesWrapper'; // Assuming MoviesWrapper can also be used for TV shows or rename it to a more generic name like MediaWrapper

const TopRatedTVShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.topRatedTvShows.tvShows);
  const status = useSelector((state) => state.topRatedTvShows.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopRatedTvShows());
    }
  }, [status, dispatch]);

  return (
    <>
      <MoviesWrapper componentTitle={'Top Rated TV Shows'} movies={tvShows} isLoading={status === 'loading'} />
    </>
  );
};

export default TopRatedTVShows;
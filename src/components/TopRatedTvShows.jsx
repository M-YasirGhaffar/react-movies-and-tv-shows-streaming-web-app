import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedTvShows } from '../features/topRatedTvShows/topRatedTvShowsSlice';
import TVShowsWrapper from './wrappers/TVShowsWrapper';
const TopRatedTvShows = () => {
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
      <TVShowsWrapper tvShows={tvShows} isLoading={status === 'loading'} />
    </>
  );
};

export default TopRatedTvShows;
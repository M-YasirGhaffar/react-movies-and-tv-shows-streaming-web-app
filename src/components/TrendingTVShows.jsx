import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingTvShows } from '../features/trendingTvShows/trendingTvShowsSlice';
import TVShowsWrapper from './wrappers/TVShowsWrapper';

const TrendingTVShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.trendingTvShows.tvShows);
  const status = useSelector((state) => state.trendingTvShows.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrendingTvShows());
    }
  }, [status, dispatch]);

  return (
    <>
      <TVShowsWrapper tvShows={tvShows} isLoading={status === 'loading'} />
    </>
  );
};

export default TrendingTVShows;
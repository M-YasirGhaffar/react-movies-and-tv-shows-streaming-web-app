import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingTvShows } from '../features/trendingTvShows/trendingTvShowsSlice';
import TVShowsWrapper from './TVShowsWrapper';

const TrendingTVShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.trendingTvShows.tvShows);
  const status = useSelector((state) => state.trendingTvShows.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrendingTvShows());
    }
  }, [status, dispatch]);

  console.log(tvShows)

  return (
    <>
      <TVShowsWrapper componentTitle={'Trending TV Shows'} tvShows={tvShows} isLoading={status === 'loading'} />
    </>
  );
};

export default TrendingTVShows;
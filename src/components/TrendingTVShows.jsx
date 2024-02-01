import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingTvShows } from '../features/trendingTvShows/trendingTvShowsSlice';
import MoviesWrapper from './MoviesWrapper'; // Assuming MoviesWrapper can also be used for TV shows or rename it to a more generic name like MediaWrapper

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
      <MoviesWrapper componentTitle={'Trending TV Shows'} movies={tvShows} isLoading={status === 'loading'} />
    </>
  );
};

export default TrendingTVShows;
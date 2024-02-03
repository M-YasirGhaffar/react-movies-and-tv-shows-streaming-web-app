import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedTvShows } from '../features/topRatedTvShows/topRatedTvShowsSlice';
import TVShowsWrapper from './TVShowsWrapper';
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
      <TVShowsWrapper tvShows={tvShows} isLoading={status === 'loading'} />
    </>
  );
};

export default TopRatedTVShows;
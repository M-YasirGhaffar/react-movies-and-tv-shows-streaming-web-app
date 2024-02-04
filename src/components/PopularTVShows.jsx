import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTvShows } from '../features/tvShows/tvShowsSlice';
import TVShowsWrapper from './wrappers/TVShowsWrapper'; // Import TVShowsWrapper

const PopularTVShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.tvShows.items);
  const status = useSelector((state) => state.tvShows.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPopularTvShows());
    }
  }, [status, dispatch]);

  // Pass the data and loading state to TVShowsWrapper for rendering
  return <TVShowsWrapper tvShows={tvShows} isLoading={status === 'loading'} />;
};

export default PopularTVShows;
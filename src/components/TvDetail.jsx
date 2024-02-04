// Assuming the file path is src/components/TVDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTVShowDetail } from '../features/tvDetail/tvDetailSlice'; // Adjust the path as necessary
import TVDetailsWrapper from './wrappers/TVDetailsWrapper'; // Assuming you have this component


const TVDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tvShow = useSelector((state) => state.tvDetail.tvShow); // Adjust based on your store configuration
  const status = useSelector((state) => state.tvDetail.status); // Adjust based on your store configuration

  useEffect(() => {
    if (id) {
      dispatch(fetchTVShowDetail(id));
    }
  }, [id, dispatch]);  

  if (status === 'loading') return <div><i className="fa-solid fa-spinner"></i></div>;
  if (!tvShow) return <div>TV show not found</div>;

  return <TVDetailsWrapper tvShow={tvShow} />;
};

export default TVDetail;
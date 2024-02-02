import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSeasonDetails } from '../features/seasonDetail/seasonDetailSlice';
import SeasonDetailWrapper from './SeasonDetailWrapper'; // Make sure to create this component

const SeasonDetail = () => {
  const { tvId, seasonNumber } = useParams(); // Adjust based on your routing parameters
  const dispatch = useDispatch();
  const seasonData = useSelector((state) => state.seasonDetail.seasonData);
  const status = useSelector((state) => state.seasonDetail.status);

  useEffect(() => {
    if (tvId && seasonNumber) {
      dispatch(fetchSeasonDetails({ tvId, seasonNumber }));
    }
  }, [dispatch, tvId, seasonNumber]);
  if (status === 'loading') return <div>Loading season details...</div>;
  if (status === 'failed') return <div>Failed to load season details.</div>;
  if (!seasonData) return <div>Season details not found</div>;

  return <SeasonDetailWrapper seasonData={seasonData} />;
};

export default SeasonDetail;

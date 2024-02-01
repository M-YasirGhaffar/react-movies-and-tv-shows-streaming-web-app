import React from 'react';
import PopularMovies from './PopularMovies';
import PopularTVShows from './PopularTVShows';

const Dashboard = () => {
  return (
    <div>
      <PopularMovies />
      <PopularTVShows />
    </div>
  );
};

export default Dashboard;
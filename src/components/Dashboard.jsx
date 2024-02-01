import React from 'react';
import PopularMovies from './PopularMovies';
import PopularTVShows from './PopularTVShows';
import TrendingMovies from './TrendingMovies';
import TrendingTVShows from './TrendingTVShows';

const Dashboard = () => {
  return (
    <div>
      <PopularMovies />
      <PopularTVShows />
      <TrendingMovies />
      <TrendingTVShows />
    </div>
  );
};

export default Dashboard;
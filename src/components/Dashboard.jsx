import React from 'react';
import PopularMovies from './PopularMovies';
import PopularTVShows from './PopularTVShows';
import TrendingMovies from './TrendingMovies';
import TrendingTVShows from './TrendingTVShows';
import TopRatedMovies from './TopRatedMovies';

const Dashboard = () => {
  return (
    <div>
      <PopularMovies />
      <PopularTVShows />
      <TrendingMovies />
      <TrendingTVShows />
      <TopRatedMovies />
    </div>
  );
};

export default Dashboard;
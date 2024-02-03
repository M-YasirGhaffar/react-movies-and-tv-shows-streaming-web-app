import React from 'react';
import { useNavigate } from 'react-router-dom';

const TVShowsWrapper = ({ tvShows, isLoading }) => {
  const navigate = useNavigate();

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  const handleClick = (showId) => {
    navigate(`/tv/${showId}`);
  };

  if (isLoading) {
    return <div className="text-center font-bold">Loading...</div>;
  }

  return (
    <div className="container mx-auto m-1">
      <div className="flex flex-wrap justify-center p-1">
        {tvShows.map(show => (
          <div key={show.id} 
          onClick={() => {
            handleClick(show.id)
          }}
          className="p-1 m-2 rounded-md transition duration-300 ease-in-out hover:transform hover:-translate-y-1" style={{ minWidth: '200px', maxWidth: 'calc(15% - 1rem)' }}>
            <img src={`${imageUrlBase}${show.poster_path}`} alt={show.name} className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center">{show.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsWrapper;

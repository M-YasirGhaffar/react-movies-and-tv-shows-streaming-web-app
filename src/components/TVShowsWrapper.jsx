import React from 'react';
import { useNavigate } from 'react-router-dom';

const TVShowsWrapper = ({ tvShows, isLoading }) => {
  const navigate = useNavigate();

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  const handleClick = (showId) => {
    navigate(`/tv/${showId}`);
  };

  if (isLoading) {
    return <div className="text-center font-bold"><i className="fa-solid fa-spinner"></i></div>;
  }

  return (
    <div className="container mx-auto m-1">
      <div className="flex flex-wrap justify-center p-1">
        {tvShows.map(show => (
          <div key={show.id} 
          onClick={() => {
            handleClick(show.id)
          }}
          className="p-1 m-2 rounded-md transition duration-300 ease-in-out 
          text-sm sm:text-md font-thin sm:font-normal
          hover:transform hover:-translate-y-1 min-w-[100px] sm:min-w-[150px]" style={{ maxWidth: 'calc(15% - 1rem)' }}>
            <img src={`${imageUrlBase}${show.poster_path}`} alt={show.name} 
            className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center text-wrap break-word">{show.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShowsWrapper;

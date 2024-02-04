import React from 'react';
import { Link } from 'react-router-dom';

const TVShowsWrapper = ({ tvShows, isLoading }) => {

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  if (isLoading) {
    return <div className="text-center font-bold"><i className="fa-solid fa-spinner"></i></div>;
  }

  return (
    <div className="container mx-auto m-1">
      <div className="flex flex-wrap justify-center p-1">
        {tvShows.map(show => (
          <Link to={`/tv/${show.id}`} key={show.id}
          className="block p-1 m-2 rounded-md transition duration-300 ease-in-out 
          text-sm sm:text-md font-thin sm:font-normal
          hover:transform hover:-translate-y-1 min-w-[120px] sm:min-w-[150px]" 
          style={{ maxWidth: 'calc(15% - 1rem)' }}>
            <img src={show.poster_path ? `${imageUrlBase}${show.poster_path}` : '/placeholder.jpeg'} alt={show.name} 
            className="w-full h-auto rounded-xl" />
            <p className="my-1 text-center text-wrap break-word">{show.name}</p>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default TVShowsWrapper;

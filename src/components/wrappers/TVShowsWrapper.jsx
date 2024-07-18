import React from 'react';
import { Link } from 'react-router-dom';

const TVShowSkeleton = () => (
  <div className="block sm:min-w-[150px] min-w-[130px] p-1 m-1 sm:m-2 rounded-md animate-pulse" style={{ maxWidth: 'calc(15% - 1rem)' }}>
    <div className="bg-gray-300 w-full aspect-[2/3] rounded-xl"></div>
    <div className="h-4 bg-gray-300 rounded mt-2 w-3/4 mx-auto"></div>
  </div>
);

const TVShowsWrapper = ({ tvShows, isLoading }) => {

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  if (isLoading) {
    return (
      <div className="mx-4 flex justify-center">
        <div className="flex flex-wrap justify-center">
          {[...Array(10)].map((_, index) => (
            <TVShowSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 flex justify-center">
      <div className="flex flex-wrap justify-center">
        {tvShows.map(show => (
          <Link to={`/tv/${show.id}`} key={show.id}
          className="block p-1 m-1 rounded-md transition duration-300 ease-in-out 
          text-sm sm:text-md font-thin sm:font-normal
          hover:blur-sm min-w-[130px] sm:min-w-[150px]" 
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
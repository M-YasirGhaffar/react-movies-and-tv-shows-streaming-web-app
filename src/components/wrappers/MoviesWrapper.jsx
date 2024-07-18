import React from 'react';
import { Link } from 'react-router-dom';

const MovieSkeleton = () => (
  <div className="block sm:min-w-[150px] min-w-[130px] p-1 m-1 sm:m-2 rounded-md animate-pulse" style={{ maxWidth: 'calc(15% - 1rem)' }}>
    <div className="bg-gray-300 w-full aspect-[2/3] rounded-xl"></div>
    <div className="h-4 bg-gray-300 rounded mt-2 w-3/4 mx-auto"></div>
  </div>
);

const MoviesWrapper = ({ movies, isLoading}) => {

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  if (isLoading) {
    return (
      <div className="mx-4 flex justify-center">
        <div className="flex flex-wrap justify-center p-1">
          {[...Array(10)].map((_, index) => (
            <MovieSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 flex justify-center">
      <div className="flex flex-wrap justify-center p-1">
        {movies.map(movie => (
      <Link to={`/movie/${movie.id}`} key={movie.id} 
      className="block sm:min-w-[150px] min-w-[130px] p-1 m-1 sm:m-2 rounded-md transition duration-300 ease-in-out hover:blur-sm"
      style={{ maxWidth: 'calc(15% - 1rem)' }} title={`${movie.title}`}>
        <img src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : '/placeholder.jpeg'} alt={movie.title}
        className="w-full h-auto rounded-xl" />
        <p className="my-1 sm:text-md text-sm sm:font-normal font-extralight text-center text-wrap break-word">{movie.title}</p>
    </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesWrapper;
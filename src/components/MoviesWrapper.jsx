import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const MoviesWrapper = ({ movies, isLoading}) => {
  const navigate = useNavigate();

  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (isLoading) {
    return <div className="text-center font-bold">Loading...</div>;
  }

  return (
    <div className="mx-8 flex justify-center">
      <div className="flex flex-wrap justify-center  p-1">
        {movies.map(movie => (
          <div title={`${movie.title}`} onClick={() => {
            handleClick(movie.id)
          }} key={movie.id} 
          className=" sm:min-w-[150px] min-w-[100px] p-1 m-1 sm:m-2 rounded-md transition duration-300 ease-in-out hover:transform hover:-translate-y-1" 
          style={{ maxWidth: 'calc(15% - 1rem)' }}>
            <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-xl" />
            <p className="my-1 sm:text-xl text-sm sm:font-normal font-extralight text-center text-wrap break-word">{movie.title}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MoviesWrapper;
import React from 'react';

const MovieDetailsWrapper = ({ movie }) => {
  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-details-container p-4 min-h-screen"
    
    style={{ 
        background: `url(${imageUrlBase}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >

      <div className="flex flex-col md:flex-row text-white rounded-3xl p-5 m-10 movie-details-content-container">
        <div className="poster-image p-1" style={{ minWidth: '300px', maxWidth: 'calc(15% - 1rem)' }}>
          <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
        </div>

        <div className="movie-info ml-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-lg">{movie.tagline}</p>
          <div className="rating">Rating: {movie.vote_average} ({movie.vote_count} votes)</div>
          <p className="genres">Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p className="overview">{movie.overview}</p>
          <p className="release-date">Release Date: {movie.release_date}</p>
          <p className="runtime">Runtime: {movie.runtime} minutes</p>
          <p className="language">Original Language: {movie.original_language}</p>

          {/* {movie.homepage && (
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">Visit Official Site</a>
          )} */}

          {/* Additional details can be added here */}
        </div>



        
      </div>
    </div>
  );
};

export default MovieDetailsWrapper;

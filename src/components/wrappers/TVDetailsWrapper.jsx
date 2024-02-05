import React from 'react';
import SeasonsAndEpisodes from './SeasonsAndEpisodes';
import Navbar from '../ui/Navbar';

const TVDetailsWrapper = ({ tvShow }) => {
  const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

  const countStars = (voteAverage) => {
    const scaledAverage = voteAverage / 2; // Convert to a 5-point scale
    const solidStars = Math.floor(scaledAverage);
    const halfStar = scaledAverage % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - solidStars - halfStar;

    const starElements = [];

    for (let i = 0; i < solidStars; i++) {
      starElements.push(<i className="fas fa-star" key={`solid-${i}`}></i>);
    }

    if (halfStar) {
      starElements.push(<i className="fas fa-star-half-alt" key="half"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<i className="far fa-star" key={`empty-${i}`}></i>);
    }

    return starElements;
  };

  const stars = countStars(tvShow.vote_average);

  return (
    <>

    <div className="tv-details-container min-h-screen flex flex-col justify-center items-center"
      style={{
        background: `url(${imageUrlBase}${tvShow.backdrop_path})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Navbar />

      <div className="flex flex-col justify-center items-center md:flex-row rounded-3xl sm:scale-100 
      scale-[95%] p-2 sm:p-5 m-3 sm:m-10 tv-details-content-container z-10">
        <div className="poster-image m-5" style={{ minWidth: '300px', maxWidth: 'calc(15% - 1rem)' }}>
          <img src={`${imageUrlBase}${tvShow.poster_path}`} alt={tvShow.name} className="rounded-lg" />
        </div>

        {/* text content */}
        <div className="tv-info ml-5">
          <h1 className="text-5xl font-bold">{tvShow.name}</h1>
          <p className="tagline text-xl text-gray-300">{tvShow.tagline}</p>
          <p className="overview my-1 text-md text-gray-300">{tvShow.overview}</p>
          <div className="rating">Rating: {tvShow.vote_average} / {tvShow.vote_count} votes</div>
          <div className='stars text-2xl'>{stars.map(s => s)}</div>
          <p className="release-date text-md text-gray-300 my-1">First Air Date: {tvShow.first_air_date}</p>
          <p className="runtime text-md text-gray-300 my-1">Number of Seasons: {tvShow.number_of_seasons}</p>
          <p className="runtime text-md text-gray-300 my-1">Number of Episodes: {tvShow.number_of_episodes}</p>
          <p className="language text-md text-gray-300 my-1">Original Language: {tvShow.original_language}</p>
          <p className="status text-md text-gray-300 my-1">Status: {tvShow.status}</p>
          <p className="production-countries text-md text-gray-300 my-1">Country: {tvShow.production_countries?.map(country => country.name).join(', ')}</p>
          <p className="spoken-languages text-md text-gray-300 my-1">Spoken Languages: {tvShow.spoken_languages?.map(lang => lang.english_name).join(', ')}</p>
          <div className="genres text-md text-gray-300 my-1">Genres: {tvShow.genres?.map(genre => <span key={genre.id}>{genre.name}</span>)}</div>
        </div>
      </div>


    </div>
          <SeasonsAndEpisodes seasons={tvShow.seasons} tvId={tvShow.id} />
      </>
  );
};

export default TVDetailsWrapper;

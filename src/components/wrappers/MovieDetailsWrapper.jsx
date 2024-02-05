import React from 'react';
import Navbar from '../ui/Navbar';

const MovieDetailsWrapper = ({ movie }) => {
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

    const countStars = (voteAverage) =>{
        const scaledAverage = voteAverage / 2; // Convert to a 5-point scale
        const solidStars = Math.floor(scaledAverage);
        const halfStar = scaledAverage % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - solidStars - halfStar;
      
        const starElements = [];
      
        for (let i = 0; i < solidStars; i++) {
          starElements.push(<i className="fa fa-star" key={`solid-${i}`}></i> );
        }
      
        if (halfStar) {
          starElements.push(<i className="fa fa-star-half-full" key={'half'}></i>);
        }
      
        for (let i = 0; i < emptyStars; i++) {
          starElements.push(<i className="fa-regular fa-star" key={`empty-${i}`}></i> );
        }
      
        return starElements;
    }

    const stars = countStars(movie.vote_average);

    return (
        <div className="movie-details-container sm:min-h-screen flex flex-col justify-center items-center"

            style={{
                background: `url(${imageUrlBase}${movie.backdrop_path})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >

            <Navbar />

            <div className="flex flex-col justify-center items-center md:flex-row rounded-3xl 
            p-1 sm:p-3 m-3 sm:scale-100 scale-[95%] sm:m-10 movie-details-content-container
            z-[10]
            ">
                <div className="poster-image m-5" style={{ minWidth: '300px', maxWidth: 'calc(15% - 1rem)' }}>
                    <img src={movie.poster_path ? `${imageUrlBase}${movie.poster_path}` : '/placeholder.jpeg'} alt={movie.title} className="rounded-lg" />
                </div>


                {/* text content  */}
                <div className="movie-info ml-5">
                    <h1 className="text-5xl font-bold">{movie.title} </h1>
                    <p className="tagline text-xl text-gray-300">{movie.tagline}</p>
                    <p className="overview my-1 text-md text-gray-300">{movie.overview}</p>
                    <div className="rating ">Rating: {movie.vote_average}/{movie.vote_count} votes</div>
                    <div className='stars text-2xl'>{stars.map(s => s)}</div>
                    <p className="release-date text-md text-gray-300 my-1">Release Date: {movie.release_date}</p>
                    <p className="runtime text-md text-gray-300 my-1">Runtime: {Math.floor(movie.runtime/60)} hours {movie.runtime%60} minutes</p>
                    <p className="language text-md text-gray-300 my-1">Original Language: {movie.original_language}</p>
                    <p className="status text-md text-gray-300 my-1">Status: {movie.status}</p>
                    <p className="production-countries text-md text-gray-300 my-1">Country: {movie.production_countries.map(country => country.name).join(', ')}</p>
                    <p className="spoken-languages text-md text-gray-300 my-1">Spoken Languages: {movie.spoken_languages.map(lang => lang.english_name).join(', ')}</p>
                    <div className="genres text-md text-gray-300 my-1">Genres: {movie.genres.map(genre => <span>{genre.name}</span>)}</div>
                </div>
            </div>

            <div className='movie-player m-2 sm:m-5 mb-10 w-full h-full z-[50]'>
                <iframe
                    className="sm:w-[90%] md:w-[80%] w-full min-h-[50vh] sm:min-h-[80vh] z-[50] m-auto rounded-xl border-1 shadow-2xl"
                    style={{
                        borderColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                    src={`https://multiembed.mov/?video_id=${movie.id}&tmdb=1`}
                    allowFullScreen
                />
            </div>

        </div>
    );
};

export default MovieDetailsWrapper;

import React from 'react';

const MovieDetailsWrapper = ({ movie }) => {
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="movie-details-container p-4 min-h-screen flex flex-col justify-center items-center"

            style={{
                background: `url(${imageUrlBase}${movie.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className='movie-player m-5 w-full h-full'>
                <iframe
                    className="w-[75%] min-h-[80vh] m-auto rounded-xl"
                    src={`https://www.2embed.cc/embed/${movie.id}`}
l                    allowFullScreen
                />
            </div>


            <div className="flex flex-col justify-center items-center md:flex-row text-white rounded-3xl p-5 m-10 mt-5 movie-details-content-container">
                <div className="poster-image m-5" style={{ minWidth: '300px', maxWidth: 'calc(15% - 1rem)' }}>
                    <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
                </div>

                {/* text content  */}
                <div className="movie-info ml-5">
                    <h1 className="text-3xl font-bold">{movie.title}</h1>
                    <p className="text-lg italic">{movie.tagline}</p>
                    <p className="overview">Overview: {movie.overview}</p>
                    <div className="rating">Rating: {movie.vote_average} ({movie.vote_count} votes)</div>
                    <p className="genres">Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
                    <p className="release-date">Release Date: {movie.release_date}</p>
                    <p className="runtime">Runtime: {movie.runtime} minutes</p>
                    <p className="language">Original Language: {movie.original_language}</p>
                    <p className="status">Status: {movie.status}</p>
                    <p className="production-countries">Country: {movie.production_countries.map(country => country.name).join(', ')}</p>
                    <p className="spoken-languages">Spoken Languages: {movie.spoken_languages.map(lang => lang.english_name).join(', ')}</p>
                </div>
            </div>

        </div>
    );
};

export default MovieDetailsWrapper;

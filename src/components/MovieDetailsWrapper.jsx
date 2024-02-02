import React from 'react';

const MovieDetailsWrapper = ({ movie }) => {
    const imageUrlBase = 'https://image.tmdb.org/t/p/w500';

    const countStars = (voteAverage) =>{
        const scaledAverage = voteAverage / 2; // Convert to a 5-point scale
        const solidStars = Math.floor(scaledAverage);
        const halfStar = scaledAverage % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - solidStars - halfStar;
      
        const starElements = [];
      
        for (let i = 0; i < solidStars; i++) {
          starElements.push(<i class="fa fa-star" key={`solid-${i}`}></i> );
        }
      
        if (halfStar) {
          starElements.push(<i class="fa fa-star-half-full" key={'half'}></i>);
        }
      
        for (let i = 0; i < emptyStars; i++) {
          starElements.push(<i class="fa-regular fa-star" key={`empty-${i}`}></i> );
        }
      
        return starElements;
    }

    const stars = countStars(movie.vote_average);

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
                    className="w-[75%] min-h-[80vh] m-auto rounded-xl border-2 shadow-2xl"
                    style={{
                        borderColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                    src={`https://www.2embed.cc/embed/${movie.id}`}
l                    allowFullScreen
                />
            </div>


            <div className="flex flex-col justify-center items-center md:flex-row rounded-3xl p-5 m-10 mt-5 movie-details-content-container">
                
                <div className="poster-image m-5" style={{ minWidth: '300px', maxWidth: 'calc(15% - 1rem)' }}>
                    <img src={`${imageUrlBase}${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
                </div>


                {/* text content  */}
                <div className="movie-info ml-5">
                    <h1 className="text-5xl font-bold">{movie.title} </h1>
                    <p className="tagline text-2xl text-gray-300">{movie.tagline}</p>
                    <p className="overview my-1 text-sm text-gray-300">{movie.overview}</p>
                    <div className="rating ">Rating: {movie.vote_average}/{movie.vote_count} votes</div>
                    <div className='stars text-2xl'>{stars.map(s => s)}</div>
                    <p className="release-date text-md text-gray-300 my-1">Release Date: {movie.release_date}</p>
                    <p className="runtime text-md text-gray-300 my-1">Runtime: {movie.runtime} minutes</p>
                    <p className="language text-md text-gray-300 my-1">Original Language: {movie.original_language}</p>
                    <p className="status text-md text-gray-300 my-1">Status: {movie.status}</p>
                    <p className="production-countries text-md text-gray-300 my-1">Country: {movie.production_countries.map(country => country.name).join(', ')}</p>
                    <p className="spoken-languages text-md text-gray-300 my-1">Spoken Languages: {movie.spoken_languages.map(lang => lang.english_name).join(', ')}</p>
                    <div className="genres text-md text-gray-300 my-1">Genres: {movie.genres.map(genre => <span>{genre.name}</span>)}</div>
                </div>
            </div>

        </div>
    );
};

export default MovieDetailsWrapper;

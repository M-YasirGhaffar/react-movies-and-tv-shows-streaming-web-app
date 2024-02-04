import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchMulti } from '../features/search/searchSlice';
import MoviesWrapper from './MoviesWrapper';
import TVShowsWrapper from './TVShowsWrapper';
import Navbar from './Navbar';
import BackButton from './BackButton';

const SearchResults = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { results, status, error } = useSelector((state) => state.search);

  console.log(results)

  useEffect(() => {
    dispatch(searchMulti(query));
  }, [dispatch, query]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const movies = results.filter(result => result.media_type === 'movie');
  const tvShows = results.filter(result => result.media_type === 'tv');

  return (
    <div>
    <Navbar />
    
    <BackButton />

    <h1 className="movies-wrapper-title text-center mx-auto text-2xl md:text-3xl lg:text-4xl font-bold hover:-translate-y-1 w-full
     transition duration-300 ease-in-out m-4 p-4">Movies search results for <span className='underline'>{query}</span></h1>
    
      {movies.map((movie) => (
        <div key={movie.id}>
            <MoviesWrapper movies={movies} />
        </div>
      ))}

<h1 className="movies-wrapper-title text-center mx-auto text-2xl md:text-3xl lg:text-4xl font-bold hover:-translate-y-1 w-full
     transition duration-300 ease-in-out m-4 p-4">Tv shows search results for <span className='underline'>{query}</span></h1>
    
      {results.map((tv) => (
        <div key={tv.id}>
            <TVShowsWrapper tvShows={tvShows} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
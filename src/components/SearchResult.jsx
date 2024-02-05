import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchMulti } from '../features/search/searchSlice';
import MoviesWrapper from './wrappers/MoviesWrapper';
import TVShowsWrapper from './wrappers/TVShowsWrapper';
import Navbar from './ui/Navbar';

const SearchResults = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { results, status, error } = useSelector((state) => state.search);
  
  useEffect(() => {
    dispatch(searchMulti(query));
  }, [dispatch, query]);

  if (status === 'loading') {
    return <div><i className="fa-solid fa-spinner"></i></div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const movies = results.filter(result => result.media_type === 'movie');
  const tvShows = results.filter(result => result.media_type === 'tv');

  return (
    <div>
    <Navbar />
    
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

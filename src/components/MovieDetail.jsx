import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../features/movieDetail/movieDetailSlice';
import MovieDetailsWrapper from './wrappers/MovieDetailsWrapper'; // Assuming you have this component

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieDetail.movie);
  const status = useSelector((state) => state.movieDetail.status);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetail(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') return <div><i className="fa-solid fa-spinner"></i></div>;
  if (!movie) return <div>Movie not found</div>;

  return <MovieDetailsWrapper movie={movie} />;
};

export default MovieDetail;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovieDetail = createAsyncThunk(
  'movie/:movieId',
  async (movieId) => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    return response.data;
  }
);

const initialState = {
  movie: null,
  status: 'idle',
  error: null,
};

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieDetailSlice.reducer;

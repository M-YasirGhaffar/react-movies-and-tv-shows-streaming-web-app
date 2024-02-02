import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingMovies = createAsyncThunk('/fetchTrending', async () => {

  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trendingMovies:", error);
    return (error.response.data);
  }

});

const initialState = {
  movies: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const trendingMoviesSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default trendingMoviesSlice.reducer;

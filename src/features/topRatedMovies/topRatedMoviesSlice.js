import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRated', async () => {
  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TopRatedMovies:", error);
    return (error.response.data);
  }
});

const initialState = {
  movies: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const topRatedMoviesSlice = createSlice({
  name: 'topRatedMovies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default topRatedMoviesSlice.reducer;

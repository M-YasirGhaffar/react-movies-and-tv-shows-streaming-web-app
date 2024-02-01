import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingTvShows = createAsyncThunk('/', async () => {
  const apiKey = process.env.VITE_TMDB_API_KEY;
  const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`);
  return response.data.results;
});

const initialState = {
  tvShows: [],
  status: 'idle',
  error: null,
};

const trendingTvShowsSlice = createSlice({
  name: 'trendingTvShows',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrendingTvShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingTvShows.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tvShows = action.payload;
      })
      .addCase(fetchTrendingTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default trendingTvShowsSlice.reducer;

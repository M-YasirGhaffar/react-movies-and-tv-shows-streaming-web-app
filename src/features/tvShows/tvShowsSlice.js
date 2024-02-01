// import dotenv from 'dotenv';
// dotenv.config();

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPopularTvShows = createAsyncThunk('tvShows/fetchPopular', async () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Use Vite's environment variable convention
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
  
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
    throw error; // Propagate the error to be handled by the thunk's rejected case
  }
});


const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularTvShows.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPopularTvShows.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPopularTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tvShowsSlice.reducer;

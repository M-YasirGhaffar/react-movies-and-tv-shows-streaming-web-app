import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchTrendingTvShows = createAsyncThunk('trendingTvShows/fetch', async () => {
  
  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${apiKey}`;
    const response = await axios.get(url);
    console.log("here is your data:" + 'Here is my Data' + response.data);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
    throw error; // Propagate the error to be handled by the thunk's rejected case
  }
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

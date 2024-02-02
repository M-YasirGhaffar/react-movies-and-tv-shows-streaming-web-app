import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchTrendingTvShows = createAsyncThunk('tvShows/fetchTrending', async () => {
  
  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/tv/week?language=en-US&api_key=${apiKey}`;
    const response = await axios.get(url);

    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
    throw error; 
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTopRatedTvShows = createAsyncThunk('tvShows/fetchTopRated', async () => {

  try {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=1`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TopRatedTvShows:", error);
    return (error.response.data);
  }

});

const initialState = {
  tvShows: [],
  status: 'idle',
  error: null,
};

const topRatedTvShowsSlice = createSlice({
  name: 'topRatedTvShows',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTopRatedTvShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRatedTvShows.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tvShows = action.payload;
      })
      .addCase(fetchTopRatedTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default topRatedTvShowsSlice.reducer;

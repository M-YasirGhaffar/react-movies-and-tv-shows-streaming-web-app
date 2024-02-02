// src/features/tvDetail/tvDetail.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTVShowDetail = createAsyncThunk(
  'tv/:id',
  async (tvId) => {
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching tvShowsDetail details:", error);
      return (error.response.data);
    }
  }
);

const initialState = {
    tvShow: null,
    status: 'idle',
    error: null,
  };
  
  const tvDetailSlice = createSlice({
    name: 'tvDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTVShowDetail.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchTVShowDetail.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.tvShow = action.payload;
        })
        .addCase(fetchTVShowDetail.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default tvDetailSlice.reducer;
  
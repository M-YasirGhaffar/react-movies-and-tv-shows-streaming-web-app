// src/features/seasonDetail/seasonDetailSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSeasonDetails = createAsyncThunk(
  'tv/:id/season/:seasonNumber',
  async ({ tvId, seasonNumber }) => {
    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY; 
      const url = `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${apiKey}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching season details:", error);
      return (error.response.data);
    }
  }
);

const initialState = {
  seasonData: null,
  status: 'idle',
  error: null,
};

const seasonDetailSlice = createSlice({
  name: 'seasonDetail',
  initialState,
  reducers: {
    // Your reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeasonDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeasonDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.seasonData = action.payload;
      })
      .addCase(fetchSeasonDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Ensure you're accessing error correctly based on the shape of your rejected action
      });
  }
});

export default seasonDetailSlice.reducer;
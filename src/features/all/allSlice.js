import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAll = createAsyncThunk('/', async () => {
  const apiKey = process.env.VITE_TMDB_API_KEY;
  const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`);
  return response.data.results;
});

const initialState = {
  movies: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const allSlice = createSlice({
  name: 'all',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default allSlice.reducer;

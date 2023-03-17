import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getMotorcyclesFromDB from '../../APIs/motorcycles';

const Url = 'http://localhost:3002/api/v1/motorcycles';

export const deleteMotorcycle = createAsyncThunk(
  'delete/deleteMotorcycle',
  async (motorcycleId, thunkAPI) => {
    try {
      const response = await axios.delete(`${Url}/${motorcycleId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getAllMotorcycles = createAsyncThunk('Motorcycles', async () => getMotorcyclesFromDB());

const deleteMotorcycleSlice = createSlice({
  name: 'delete',
  initialState: {
    motorcycles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMotorcycles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMotorcycles.fulfilled, (state, action) => {
        state.motorcycles = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllMotorcycles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteMotorcycle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMotorcycle.fulfilled, (state, action) => {
        const filteredMotorcycles = state.motorcycles.filter((motorcycle) => motorcycle.id !== action.payload.id);
        state.motorcycles = filteredMotorcycles;
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteMotorcycle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default deleteMotorcycleSlice.reducer;
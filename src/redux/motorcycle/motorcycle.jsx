import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const Url = 'http://localhost:3000/api/v1/motorcycles';

const initialState = {
  status: null,
};

export const createMotorcycle = createAsyncThunk(
  'create/createMotorcycle',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(Url, payload, {
        motorcycle: payload,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const createMotorcycleSlice = createSlice({
  name: 'newMotorcycle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createMotorcycle.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(createMotorcycle.fulfilled, (state) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
      })
      .addCase(createMotorcycle.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default createMotorcycleSlice.reducer;
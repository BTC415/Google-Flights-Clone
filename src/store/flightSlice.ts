import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { flightAPI } from '../services/api';
import { FlightSearchParams, FlightResult } from '../types/flight';

interface FlightState {
  flights: FlightResult[];
  loading: boolean;
  error: string | null;
  searchParams: FlightSearchParams | null;
}

const initialState: FlightState = {
  flights: [],
  loading: false,
  error: null,
  searchParams: null,
};

export const searchFlights = createAsyncThunk(
  'flights/search',
  async (params: FlightSearchParams) => {
    const response = await flightAPI.searchFlights(params);
    return response.data;
  }
);

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<FlightSearchParams>) => {
      state.searchParams = action.payload;
    },
    clearFlights: (state) => {
      state.flights = [];
      state.error = null;
      state.searchParams = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload;
      })
      .addCase(searchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to search flights';
      });
  },
});

export const { setSearchParams, clearFlights } = flightSlice.actions;
export default flightSlice.reducer;

import axios from 'axios';
import { Airport, FlightSearchParams, FlightResult, ApiResponse } from '../types/flight';

const api = axios.create({
  baseURL: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
  }
});

export const flightAPI = {
  searchAirports: async (query: string): Promise<ApiResponse<Airport[]>> => {
    try {
      const response = await api.get('/searchAirport', {
        params: { query }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to search airports');
    }
  },

  searchFlights: async (params: FlightSearchParams): Promise<ApiResponse<FlightResult[]>> => {
    try {
      const response = await api.get('/searchFlights', { params });
      return response.data;
    } catch (error) {
      throw new Error('Failed to search flights');
    }
  },

  getNearbyAirports: async (lat: number, lng: number): Promise<ApiResponse<Airport[]>> => {
    try {
      const response = await api.get('/getNearByAirports', {
        params: { lat, lng }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to get nearby airports');
    }
  }
};

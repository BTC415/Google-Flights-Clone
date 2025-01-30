import { useQuery } from '@tanstack/react-query';
import { flightAPI } from '../services/api';
import { FlightSearchParams, FlightResult, ApiResponse } from '../types/flight';

export const useFlightSearch = (params: FlightSearchParams) => {
  return useQuery<ApiResponse<FlightResult[]>, Error, FlightResult[]>(
    ['flights', params],
    () => flightAPI.searchFlights(params),
    {
      enabled: Boolean(
        params.originSkyId &&
        params.destinationSkyId &&
        params.date
      ),
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false,
      select: (response) => response.data
    }
  );
};

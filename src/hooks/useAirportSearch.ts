import { useQuery } from '@tanstack/react-query';
import { flightAPI } from '../services/api';
import { Airport, ApiResponse } from '../types/flight';

export const useAirportSearch = (query: string) => {
  return useQuery<ApiResponse<Airport[]>, Error, Airport[]>(
    ['airports', query],
    () => flightAPI.searchAirports(query),
    {
      enabled: query.length > 2,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60 * 24,
      select: (response) => response.data.slice(0, 10)
    }
  );
};

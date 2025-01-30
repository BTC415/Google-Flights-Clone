import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AirportSearch from './AirportSearch';
import DatePicker from './DatePicker';
import { TravellerSelector } from './TravellerSelector';
import { CabinClassSelector } from './CabinClassSelector';
import { Button } from '../common/Button';
import { searchFlights } from '../../store/flightSlice';
import { FlightSearchParams } from '../../types/flight';

export const FlightSearchForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useState<FlightSearchParams>({
    originSkyId: '',
    destinationSkyId: '',
    originEntityId: '',
    destinationEntityId: '',
    date: '',
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: 'ECONOMY',
    currency: 'USD',
    market: 'US',
    countryCode: 'US'
  });

  const handleSearch = () => {
    dispatch(searchFlights(searchParams) as any);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AirportSearch
          label="From"
          value={searchParams.originSkyId} // Add this line
          onChange={(airport) => setSearchParams({
            ...searchParams,
            originSkyId: airport.skyId,
            originEntityId: airport.entityId
          })}
        />

        <AirportSearch
          label="To"
          value={searchParams.destinationSkyId} // Add this line
          onChange={(airport) => setSearchParams({
            ...searchParams,
            destinationSkyId: airport.skyId,
            destinationEntityId: airport.entityId
          })}
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <DatePicker
          label="Departure Date"
          value={searchParams.date}
          onChange={(date) => setSearchParams({ ...searchParams, date })}
        />
        <CabinClassSelector
          value={searchParams.cabinClass}
          onChange={(value: string) => {
            setSearchParams({
              ...searchParams,
              cabinClass: value as 'ECONOMY' | 'BUSINESS' | 'FIRST'
            })
          }}
        />
      </div>


      <TravellerSelector
        values={{
          adults: searchParams.adults,
          children: searchParams.children,
          infants: searchParams.infants
        }}
        onChange={(values) => setSearchParams({ ...searchParams, ...values })}
      />

      <Button
        variant="primary"
        size="lg"
        className="w-full mt-6"
        onClick={handleSearch}
      >
        Search Flights
      </Button>
    </div>
  );
};

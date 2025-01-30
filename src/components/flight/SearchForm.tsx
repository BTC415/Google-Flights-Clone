import { useState } from 'react';
// import { SearchIcon } from '@heroicons/react/outline';
import DatePicker from './DatePicker';
import AirportSearch from './AirportSearch';
import { Airport } from '../../types/flight';

export default function SearchForm() {
  const [origin, setOrigin] = useState<Airport | null>(null);
  const [destination, setDestination] = useState<Airport | null>(null);
  const [departDate, setDepartDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');

  const handleSearch = () => {
    // Implement flight search logic
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <AirportSearch
          label="From"
          value={origin?.skyId || ''}
          onChange={setOrigin}
        />
        <AirportSearch
          label="To"
          value={destination?.skyId || ''}
          onChange={setDestination}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <DatePicker
          label="Departure"
          value={departDate}
          onChange={setDepartDate}
        />
        <DatePicker
          label="Return"
          value={returnDate}
          onChange={setReturnDate}
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        Search Flights
      </button>
    </div>
  );
}

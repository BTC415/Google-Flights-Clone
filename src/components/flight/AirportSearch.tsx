import { useState, useEffect } from 'react';
import { useAirportSearch } from '../../hooks/useAirportSearch';
import { Airport } from '../../types/flight';
import { Input } from '../common/Input';

interface AirportSearchProps {
  label: string;
  value: string;
  onChange: (airport: Airport) => void;
}

const AirportSearch = ({ label, value, onChange }: AirportSearchProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { data: airports, isLoading } = useAirportSearch(query) as {
    data: Airport[],
    isLoading: boolean
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);



  return (
    <div className="relative">
      <Input
        label={label}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        placeholder="Search airports..."
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      />

      {isOpen && (query.length > 2) && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : airports?.length ? (
            airports.map((airport: Airport) => (
              <div
                key={airport.skyId}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(airport);
                  setQuery(airport.presentation.title);
                  setIsOpen(false);
                }}
              >
                <div className="font-medium">
                  {airport.presentation.title}
                </div>
                <div className="text-sm text-gray-500">
                  {airport.presentation.subtitle}
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No airports found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AirportSearch;

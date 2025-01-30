import { useSelector } from 'react-redux';
import { FlightCard } from './FlightCard';
import { RootState } from '../../store/store';

const FlightResults = () => {
  const { flights, loading, error } = useSelector((state: RootState) => state.flights);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;
import { FlightResult } from '../../types/flight';
import { formatTime, calculateDuration } from '../../utils/date';
import { formatCurrency } from '../../utils/format';

interface FlightCardProps {
  flight: FlightResult;
}

export const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src={flight.airline.logo} 
            alt={flight.airline.name}
            className="h-8 w-8 object-contain"
          />
          <div>
            <p className="font-medium">{flight.airline.name}</p>
            <p className="text-sm text-gray-500">{flight.segments[0].flightNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-blue-600">
            {formatCurrency(flight.price.amount, flight.price.currency)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-center">
          <p className="text-2xl font-bold">{formatTime(flight.segments[0].departure.time)}</p>
          <p className="text-sm text-gray-500">{flight.segments[0].departure.airport}</p>
        </div>
        
        <div className="flex-1 px-4">
          <div className="relative">
            <div className="border-t-2 border-gray-300 absolute w-full top-1/2"></div>
            <div className="text-center relative">
              <span className="bg-white px-2 text-sm text-gray-500">
                {calculateDuration(flight.duration)}
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold">{formatTime(flight.segments[0].arrival.time)}</p>
          <p className="text-sm text-gray-500">{flight.segments[0].arrival.airport}</p>
        </div>
      </div>

      {flight.stops > 0 && (
        <div className="mt-2 text-center text-sm text-orange-600">
          {flight.stops} {flight.stops === 1 ? 'stop' : 'stops'}
        </div>
      )}
    </div>
  );
};

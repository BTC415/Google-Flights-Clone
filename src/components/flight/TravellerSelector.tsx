import { useState } from 'react';
import { Button } from '../common/Button';

interface TravellerSelectorProps {
  values: {
    adults: number;
    children: number;
    infants: number;
  };
  onChange: (values: { adults: number; children: number; infants: number }) => void;
}

export const TravellerSelector = ({ values, onChange }: TravellerSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateCount = (type: 'adults' | 'children' | 'infants', increment: boolean) => {
    const newValues = { ...values };
    newValues[type] = increment ? values[type] + 1 : Math.max(0, values[type] - 1);
    
    // Validation rules
    if (type === 'adults' && newValues.adults < 1) newValues.adults = 1;
    if (newValues.infants > newValues.adults) newValues.infants = newValues.adults;
    
    onChange(newValues);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        <span>
          {values.adults + values.children + values.infants} Traveller(s)
        </span>
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Adults</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateCount('adults', false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <span>{values.adults}</span>
                <button
                  onClick={() => updateCount('adults', true)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>Children</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateCount('children', false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <span>{values.children}</span>
                <button
                  onClick={() => updateCount('children', true)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>Infants</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateCount('infants', false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  -
                </button>
                <span>{values.infants}</span>
                <button
                  onClick={() => updateCount('infants', true)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import { Select } from '../common/Select';

interface CabinClassSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const CABIN_CLASSES = [
  { value: 'ECONOMY', label: 'Economy' },
  { value: 'PREMIUM_ECONOMY', label: 'Premium Economy' },
  { value: 'BUSINESS', label: 'Business' },
  { value: 'FIRST', label: 'First Class' }
];

export const CabinClassSelector = ({ value, onChange }: CabinClassSelectorProps) => {
  return (
    <Select
      label="Cabin Class"
      options={CABIN_CLASSES}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full"
    />
  );
};

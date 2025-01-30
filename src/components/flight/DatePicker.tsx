import dayjs from 'dayjs';
import { Input } from '../common/Input';

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
  minDate?: string;
  maxDate?: string;
}

 const DatePicker = ({ 
  label, 
  value, 
  onChange, 
  minDate = dayjs().format('YYYY-MM-DD'),
  maxDate = dayjs().add(1, 'year').format('YYYY-MM-DD')
}: DatePickerProps) => {
  return (
    <Input
      type="date"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      min={minDate}
      max={maxDate}
      className="w-full cursor-pointer"
    />
  );
};

export default DatePicker;

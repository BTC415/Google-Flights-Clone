import dayjs from 'dayjs';

export const formatDate = (date: string): string => {
  return dayjs(date).format('MMM D, YYYY');
};

export const formatTime = (time: string): string => {
  return dayjs(time).format('HH:mm');
};

export const calculateDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

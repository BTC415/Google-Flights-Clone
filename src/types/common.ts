export interface SelectOption {
  value: string;
  label: string;
}

export interface ApiResponse<T> {
  status: boolean;
  timestamp: number;
  data: T;
}

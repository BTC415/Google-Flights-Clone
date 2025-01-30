export interface Airport {
  skyId: string;
  entityId: string;
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: string;
      localizedName: string;
    };
  };
}

export interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate?: string;
  adults: number;
  children: number;
  infants: number;
  cabinClass: 'ECONOMY' | 'BUSINESS' | 'FIRST';
  currency: string;
  market: string;
  countryCode: string;
}

export interface FlightResult {
  id: string;
  price: {
    amount: number;
    currency: string;
  };
  segments: FlightSegment[];
  duration: number;
  stops: number;
  airline: {
    code: string;
    name: string;
    logo: string;
  };
}

export interface FlightSegment {
  departure: {
    airport: string;
    terminal: string;
    time: string;
  };
  arrival: {
    airport: string;
    terminal: string;
    time: string;
  };
  duration: number;
  flightNumber: string;
  aircraft: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
  message?: string;
}

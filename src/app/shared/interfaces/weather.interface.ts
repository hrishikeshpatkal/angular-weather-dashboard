export interface WeatherHour {
  time: string;
  temp: number;
}

export interface Weather {
  city: string;
  description: string;
  temp: number;
  high: number;
  low: number;
  wind: number;
  humidity: number;
  updated: string;
  hourly: WeatherHour[];
}

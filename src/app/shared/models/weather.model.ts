export const WEATHER_CITIES = ['New York', 'London', 'Tokyo'] as const;
export type WeatherCity = (typeof WEATHER_CITIES)[number];

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Weather } from '../../shared/interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly weatherData: Record<string, Weather> = {
    'new york': {
      city: 'New York, USA',
      description: 'Clear skies',
      temp: 24,
      high: 26,
      low: 18,
      wind: 9,
      humidity: 55,
      updated: 'Now',
      hourly: [
        { time: 'Now', temp: 24 },
        { time: '1 PM', temp: 25 },
        { time: '2 PM', temp: 25 },
        { time: '3 PM', temp: 24 },
        { time: '4 PM', temp: 22 },
        { time: '5 PM', temp: 21 },
      ],
    },
    london: {
      city: 'London, UK',
      description: 'Light rain',
      temp: 17,
      high: 18,
      low: 13,
      wind: 12,
      humidity: 72,
      updated: 'Now',
      hourly: [
        { time: 'Now', temp: 17 },
        { time: '1 PM', temp: 17 },
        { time: '2 PM', temp: 16 },
        { time: '3 PM', temp: 16 },
        { time: '4 PM', temp: 15 },
        { time: '5 PM', temp: 15 },
      ],
    },
    tokyo: {
      city: 'Tokyo, JP',
      description: 'Warm and humid',
      temp: 29,
      high: 30,
      low: 25,
      wind: 7,
      humidity: 78,
      updated: 'Now',
      hourly: [
        { time: 'Now', temp: 29 },
        { time: '1 PM', temp: 29 },
        { time: '2 PM', temp: 30 },
        { time: '3 PM', temp: 29 },
        { time: '4 PM', temp: 28 },
        { time: '5 PM', temp: 27 },
      ],
    },
  };

  getDefaultWeather(): Weather {
    return this.weatherData['new york'];
  }

  getWeather(city: string): Weather | undefined {
    const normalized = city.trim().toLowerCase();
    return this.weatherData[normalized];
  }

  getApiBaseUrl(): string {
    return environment.apiBaseUrl;
  }
}

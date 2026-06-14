import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../../../core/services/weather.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';
import { ForecastCardComponent } from '../../components/forecast-card/forecast-card.component';
import { Weather } from '../../../../shared/interfaces/weather.interface';

@Component({
  selector: 'weather-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, WeatherCardComponent, ForecastCardComponent],
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css'],
})
export class WeatherHomeComponent {
  city = 'New York';
  weather = signal<Weather>({} as Weather);
  error = signal('');

  constructor(private weatherService: WeatherService) {
    this.weather.set(this.weatherService.getDefaultWeather());
  }

  searchCity(): void {
    const nextWeather = this.weatherService.getWeather(this.city);
    if (nextWeather) {
      this.weather.set(nextWeather);
      this.error.set('');
    } else {
      this.error.set('City not found. Try New York, London, or Tokyo.');
    }
  }
}

import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { WeatherHour } from '../../../../shared/interfaces/weather.interface';

@Component({
  selector: 'forecast-card',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="forecast-card">
      <p class="forecast-title">Hourly forecast</p>
      <div class="hourly-grid">
        <div class="hour" *ngFor="let hour of forecast">
          <span>{{ hour.time }}</span>
          <strong>{{ hour.temp }}°</strong>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .forecast-card {
        margin-top: 1.75rem;
      }

      .forecast-title {
        margin: 0 0 0.75rem;
        font-weight: 700;
      }

      .hourly-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.75rem;
      }

      .hour {
        background: rgba(15, 23, 42, 0.04);
        border-radius: 1rem;
        padding: 0.85rem;
        text-align: center;
      }

      .hour span {
        display: block;
        color: #64748b;
        font-size: 0.85rem;
      }

      .hour strong {
        display: block;
        margin-top: 0.35rem;
        font-size: 1rem;
      }
    `,
  ],
})
export class ForecastCardComponent {
  @Input() forecast: WeatherHour[] = [];
}

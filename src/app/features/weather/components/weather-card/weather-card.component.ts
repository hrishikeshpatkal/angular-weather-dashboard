import { Component, Input } from '@angular/core';
import { Weather } from '../../../../shared/interfaces/weather.interface';

@Component({
  selector: 'weather-card',
  standalone: true,
  template: `
    <div class="details-grid">
      <div class="detail">
        <span>High</span>
        <strong>{{ weather.high }}°</strong>
      </div>
      <div class="detail">
        <span>Low</span>
        <strong>{{ weather.low }}°</strong>
      </div>
      <div class="detail">
        <span>Wind</span>
        <strong>{{ weather.wind }} km/h</strong>
      </div>
      <div class="detail">
        <span>Humidity</span>
        <strong>{{ weather.humidity }}%</strong>
      </div>
    </div>
  `,
  styles: [
    `
      .details-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 1.75rem;
      }

      .detail {
        background: rgba(99, 102, 241, 0.08);
        border-radius: 1rem;
        padding: 1rem;
      }

      .detail span {
        display: block;
        color: #64748b;
        font-size: 0.85rem;
      }

      .detail strong {
        margin-top: 0.5rem;
        display: block;
        font-size: 1.05rem;
      }
    `,
  ],
})
export class WeatherCardComponent {
  @Input() weather!: Weather;
}

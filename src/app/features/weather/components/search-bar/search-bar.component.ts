import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'weather-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form class="search-row" (ngSubmit)="search.emit()">
      <label class="sr-only" for="city-input">City</label>
      <input
        id="city-input"
        name="city"
        type="text"
        [(ngModel)]="city"
        (ngModelChange)="cityChange.emit($event)"
        placeholder="New York, London, Tokyo"
        class="search-input"
      />
      <button type="submit" class="search-button">Go</button>
    </form>
  `,
  styles: [
    `
      .search-row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.75rem;
      }

      .search-input {
        width: 100%;
        min-width: 0;
        border: 1px solid rgba(15, 23, 42, 0.12);
        border-radius: 999px;
        padding: 0.95rem 1rem;
        font-size: 1rem;
        outline: none;
      }

      .search-input:focus {
        border-color: #6366f1;
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
      }

      .search-button {
        border: none;
        border-radius: 999px;
        background: #4338ca;
        color: white;
        padding: 0 1.25rem;
        font-weight: 600;
        cursor: pointer;
      }
    `,
  ],
})
export class SearchBarComponent {
  @Input() city = '';
  @Output() cityChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();
}

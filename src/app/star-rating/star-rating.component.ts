// star-rating.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  template: `
    <div style="width: 300px;" class="star-rating">
      <span class="me-3 text-dark">Rate: </span>
      <!-- Static stars with fixed color and size -->
      <i class="fas fa-star static-star" *ngFor="let _ of staticStars"></i>
      <!-- Dynamic stars with ngClass -->
      <ng-container *ngFor="let _ of dynamicStars; let i = index">
        <i class="fas dynamic-star" [ngClass]="{'fa-star': i < roundedRating, 'fa-star-o': i >= roundedRating}"></i>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .star-rating {
        display: flex;
        align-items: center;
      }

      .static-star,
      .dynamic-star {
        color: grey;
        font-size: 1em;
        margin-right: 5px;
      }
      .dynamic-star {
        color: green;
        position: relative;
        left: -230px; /* Adjust the positioning as needed */
      }
    `,
  ],
  imports: [CommonModule],
})
export class StarRatingComponent {
  private _rating: number = 5; // Default to a rating of 5 for demonstration

  @Input()
  set rating(value: number) {
    // Ensure the rating is between 1 and 10
    this._rating = Math.max(1, Math.min(10, Math.round(value)));
  }

  get rating(): number {
    return this._rating;
  }

  get roundedRating(): number {
    return Math.round(this._rating);
  }

  // Arrays to control the number of static and dynamic stars
  staticStars = Array(10).fill(null);
  dynamicStars = Array(10).fill(null);
}

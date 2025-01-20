import { Component } from '@angular/core';

@Component({
  selector: 'app-free',
  standalone: false,
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css'], // Fixed property name
})
export class FreeComponent {
  ratings: number[] = [50, 45, 60]; // Initial ratings for each card
  thumbStates: boolean[] = [false, false, false]; // Track if thumb is active for each card
  favorites: boolean[] = [false, false, false]; // Track favorite state for each card

  // Toggle thumb and update rating
  toggleThumb(index: number) {
    this.thumbStates[index] = !this.thumbStates[index];
    if (this.thumbStates[index]) {
      this.ratings[index]++; // Increment rating if activated
    } else {
      this.ratings[index]--; // Decrement rating if deactivated
    }
  }

  // Toggle favorite state
  toggleFavorite(index: number) {
    this.favorites[index] = !this.favorites[index];
  }
}

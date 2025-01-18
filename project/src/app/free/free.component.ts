import { Component } from '@angular/core';

@Component({
  selector: 'app-free',
  standalone: false,
  
  templateUrl: './free.component.html',
  styleUrl: './free.component.css'
})
export class FreeComponent {
  favorites: { [key: number]: boolean } = {
    1: false,
    2: false,
    3: false
  };

  toggleFavorite(cardId: number) {
    this.favorites[cardId] = !this.favorites[cardId];
  }
}

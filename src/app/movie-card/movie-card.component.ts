import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  imports: [NgClass,CommonModule]
})
export class MovieCardComponent {
  @Input() movieItem: any;

  constructor(private router: Router,public wishlistService: WishlistService) {}
  

  redirectToDetails(id: number) {
    this.router.navigate([`movie-details/${id}`]);
  }

  toggleWishlist(): void {
    if (this.wishlistService.isInWishlist(this.movieItem)) {
      this.wishlistService.removeFromWishlist(this.movieItem);
    } else {
      this.wishlistService.addToWishlist(this.movieItem);
    }
  }

}

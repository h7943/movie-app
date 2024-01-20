import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../interface/movie';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({

  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  imports:[NgFor,RouterLink],
  standalone:true
})
export class WishListComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(public wishlistService: WishlistService) {}

  removeFromWishlist(movie: Movie): void {
    this.wishlistService.removeFromWishlist(movie);
  }
  
  ngOnInit() {
  }
  toggleWishlist(): void {
    if (this.wishlistService.isInWishlist(this.movie)) {
      this.wishlistService.removeFromWishlist(this.movie);
    } else {
      this.wishlistService.addToWishlist(this.movie);
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../interface/movie';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class WishListComponent implements OnInit {

  constructor(public wishlistService: WishlistService) {}

  removeFromWishlist(movie: Movie): void {
    this.wishlistService.removeFromWishlist(movie);
  }
  
  ngOnInit() {
  }

}

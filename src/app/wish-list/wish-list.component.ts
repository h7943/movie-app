import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Movie } from '../interface/movie';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CustomDatePipe } from '../pipes/format-date.pipe';
import { StarRatingComponent } from "../star-rating/star-rating.component";


@Component({
    selector: 'app-wish-list',
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css'],
    standalone: true,
    imports: [NgFor, NgIf, RouterLink, CustomDatePipe, StarRatingComponent]
})
export class WishListComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(public wishlistService: WishlistService) {}

  removeFromWishlist(movie: Movie): void {
    this.wishlistService.removeFromWishlist(movie);
  }
  ngOnInit() {
  }

}

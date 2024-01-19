import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interface/movie';
=======
import { Router } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';

>>>>>>> c906d0fd8aed3a9bd476401f4a4d34d57f569747

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  imports: [NgClass,CommonModule]
})
export class MovieCardComponent {
<<<<<<< HEAD
  @Input() movieItem !: Movie;
  date!:string
  constructor(private router: Router,private route: ActivatedRoute, private datePipe:DatePipe) {}
=======
  @Input() movieItem: any;

  constructor(private router: Router,public wishlistService: WishlistService) {}
>>>>>>> c906d0fd8aed3a9bd476401f4a4d34d57f569747
  
  ngOnInit(): void {
    this.date = this.formatDate(this.movieItem.release_date);
  }

<<<<<<< HEAD
  redirectToDetails(id: number) {
    this.router.navigate ( [ '/movie-details', id ] );
  }
  private formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'MMM d, y') || '';
  }
=======
  toggleWishlist(): void {
    if (this.wishlistService.isInWishlist(this.movieItem)) {
      this.wishlistService.removeFromWishlist(this.movieItem);
    } else {
      this.wishlistService.addToWishlist(this.movieItem);
    }
  }

>>>>>>> c906d0fd8aed3a9bd476401f4a4d34d57f569747
}

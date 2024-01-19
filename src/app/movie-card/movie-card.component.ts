import { CommonModule, DatePipe, NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  imports: [NgClass,CommonModule]
})
export class MovieCardComponent {

  @Input() movieItem !: Movie;
  date!:string
  constructor(private router: Router,private route: ActivatedRoute, private datePipe:DatePipe,public wishlistService: WishlistService) {}


  
  ngOnInit(): void {
    this.date = this.formatDate(this.movieItem.release_date);
  }


  redirectToDetails(id: number) {
    this.router.navigate ( [ '/movie-details', id ] );
  }
  private formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'MMM d, y') || '';
  }

  toggleWishlist(): void {
    if (this.wishlistService.isInWishlist(this.movieItem)) {
      this.wishlistService.removeFromWishlist(this.movieItem);
    } else {
      this.wishlistService.addToWishlist(this.movieItem);
    }
  }

}

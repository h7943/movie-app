import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interface/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { PaginationService } from '../services/pagination-service.service';
import { PaginationComponent } from '../paginations/paginations.component';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent,PaginationComponent,FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  name: string = '';

  constructor(
    private moviesService: MoviesService,
    private paginationService: PaginationService
  ) {}


  ngOnInit() {
    // Load movies on component initialization
    this.loadMovies();
    this.paginationService.currentPage$.subscribe((page: number) => {
      this.loadMovies(page);
    });
  }

  loadMovies(page: number = 1) {
    this.moviesService.getPopularMovies(page).subscribe(
      (data:Data) => {
        if (data['results']) {
          this.movies = data['results'];
          this.currentPage = data['page'];
          this.totalPages = data['total_pages'];
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onPageChange(page: number): void {
    this.paginationService.setCurrentPage(page);
  }
  
  getSearch(movieName: string = this.name): void {
    this.moviesService.getSearch(movieName).subscribe((data:Data) => {
      const movies = data['results'];
      // Loop through the array of movie objects
      for (const movie of movies) {
        // Access the "title" property and log the title
        if(movie.title){
          console.log(movie);
        }
        
      }
    });
  }
  
}


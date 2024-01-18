import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import { Movie } from '../interface/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent,NgFor,NgIf],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService) {}
  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(
      (data: any) => {
        if (data.results) {
          this.movies = data.results;
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
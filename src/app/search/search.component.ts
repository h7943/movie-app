import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Movie } from '../interface/movie';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone:true,
  imports:[MovieCardComponent,NgFor,NgIf]

})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: Movie[] = [];

  constructor(private moviesService: MoviesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['movieName']; 
      this.searchMovies();
    });
    
  }

  searchMovies() {
      this.moviesService.getSearch(this.searchQuery).subscribe(
        (data) => {
          console.log('API Response:', data);
          this.searchResults = data.results;
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
  }
  

}

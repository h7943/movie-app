import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Data } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Movie } from '../interface/movie';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone:true,
  imports:[MovieCardComponent,NgFor,NgIf,FormsModule]

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
//   this.moviesService.getSearch(movieName).subscribe((data:Data) => {
  //     const movies = data['results'];
  //     console.log(da)
  //     // Loop through the array of movie objects
  //     for (const movie of movies) {
  //       // Access the "title" property and log the title
  //       // if(movie.title){
  //       //   console.log(movie);
  //       // }
        
  //     }
  //   });
  searchMovies(movieName: string = this.searchQuery) {
      this.moviesService.getSearch(movieName).subscribe((data:Data) => {
      const movies = data['results'];
      console.log(movies)
      // Loop through the array of movie objects
      for (const movie of movies) {
        // Access the "title" property and log the title
        // if(movie.title){
        //   console.log(movie);
        // }
        
      }
    });
    
  }
  

}

import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { CommonModule } from "@angular/common";
import { Movie } from '../interface/movie';
import { MovieItemDetailsComponent } from "../movie-item-details/movie-item-details.component";
import { MovieRecommendComponent } from "../movie-recommend/movie-recommend.component";

@Component({
    selector: "app-movie-details",
    standalone: true,
    templateUrl: "./movie-details.component.html",
    styleUrls: ["./movie-details.component.css"],
    imports: [CommonModule, MovieItemDetailsComponent, MovieRecommendComponent]
})
export class MovieDetailsComponent implements OnInit {
  movie:any;
  movies : Movie[] = [];
  @Input() id!: number;
  constructor(private moviesService: MoviesService) {}
  
  ngOnInit() {
    this.moviesService.getMovieDetails(this.id).subscribe((res) => {
      if (res) {
        this.movie = res;        
      } else {
        console.error("No Movie found in the response.");
      }
    });
    
    this.moviesService.getRecommendDetails(this.id).subscribe((res:any) => {
      if (res) {
        this.movies = res.results;
      } else {
        console.error("No Movies recommend found in the response.");
      }
    });

  }
}

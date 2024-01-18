import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-item-details',
  standalone: true,
  templateUrl: './movie-item-details.component.html',
  styleUrls: ['./movie-item-details.component.css'],
  imports:[NgbRatingModule]
})
export class MovieItemDetailsComponent implements AfterContentChecked {
  @Input() movie: any;

  logos !:string
  names!: string
  constructor() { }
  
  ngAfterContentChecked() {
    const genreNames = this.movie.genres.map((genre: { name: any; }) => genre.name);
    this.names = genreNames

    const paths = this.movie.production_companies.map((path: { logo_path: any; }) => path.logo_path)
    this.logos = paths
    // console.log(genreNames)
  }
}


import { AfterContentChecked, Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
// import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Movie, Companie } from '../interface/movie';
import { Genre } from '../interface/movie';
import { DatePipe, NgClass, NgIf } from '@angular/common';
// NgbRatingModule
@Component({
  selector: 'app-movie-item-details',
  standalone: true,
  templateUrl: './movie-item-details.component.html',
  styleUrls: ['./movie-item-details.component.css'],
  imports:[NgClass, NgIf]
})
export class MovieItemDetailsComponent implements OnChanges, OnInit {
  @Input() movie!: Movie;
  logos!: string[];
  names!: string[];
  date!: string
  constructor(private route: ActivatedRoute,private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.date = this.formatDate(this.movie.release_date);
  }

  ngOnChanges() {
    const genreNames:string[] = this.movie.genres.map((genre: Genre) => genre.name);
    this.names = genreNames
    const paths = this.movie.production_companies.map((path: Companie) => path.logo_path)
    this.logos = paths;
  }
  
  private formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'MMM d, y') || '';
  }
  isHeartFilled: boolean = true;

  colorHeart() {
    this.isHeartFilled = false
  }
  removeColor(){
    this.isHeartFilled = true
  }
}


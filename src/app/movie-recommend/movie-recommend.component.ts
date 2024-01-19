import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../interface/movie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-recommend',
  standalone: true,
  templateUrl: './movie-recommend.component.html',
  styleUrls: ['./movie-recommend.component.css'],
  imports: [NgbAccordionModule,RouterLink]
})
export class MovieRecommendComponent {
  @Input() movie!:Movie
  currentId !: string;
  date!:string;
  constructor(private router:Router,private route: ActivatedRoute,private datePipe: DatePipe){
  }
  ngOnInit(): void {
    this.date = this.formatDate(this.movie.release_date);
  }
  redirectToDetails(id: number) {

    const currentId : any = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/movie-details/${id}`]);
    if(this.movie.id != currentId){
      window.scrollTo(0,0)
    }
  }
  private formatDate(date: Date | string): string {
    return this.datePipe.transform(date, 'MMM d, y') || '';
  }
}

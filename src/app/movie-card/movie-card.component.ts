import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movieItem: any;
  @Output() sendToParent = new EventEmitter<number>();

  constructor(private router: Router) {}
  

  // redirectToDetails(id: number) {
  //   this.router.navigate([`movie-details/${id}`], {
  //     queryParams: {
  //       category: 'action',
  //     },
  //   });
  // }

}

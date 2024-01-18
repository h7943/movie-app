import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  imports: [NgClass,CommonModule]
})
export class MovieCardComponent {
  @Input() movieItem: any;

  constructor(private router: Router) {}
  

  redirectToDetails(id: number) {
    this.router.navigate([`movie-details/${id}`]);
  }

}

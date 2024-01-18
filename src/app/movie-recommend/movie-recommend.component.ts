import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
// NgbAccordionModule
@Component({
  selector: 'app-movie-recommend',
  standalone: true,
  templateUrl: './movie-recommend.component.html',
  styleUrls: ['./movie-recommend.component.css'],
  imports: []
})
export class MovieRecommendComponent implements OnInit {
  constructor(private router:Router){}
  redirectToDetails(id: number) {
    this.router.navigate ( [ '/details', id ] );
  }
  @Input() movie:any

  ngOnInit() {
    
  }

}

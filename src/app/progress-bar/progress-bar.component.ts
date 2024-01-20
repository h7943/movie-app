// progress-bar.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  totalPatient: number = 0;
  percentage: number = 0;

  ngOnInit() {
    this.updateProgressBar();
  }

  changePer() {
    this.updateProgressBar();
  }

  private updateProgressBar() {
    const a = -3.46;
    const b = 440;
    const finalOffset = Math.round(a * this.percentage + b);
    const concernedCircle = document.querySelector('.filled') as HTMLElement;
    concernedCircle.style.strokeDashoffset = finalOffset + '';
  }
}

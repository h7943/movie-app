// progress-bar.component.ts

import { PercentPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  totalPatient: number[] = [];
  @Input() precentage!: number;

  ngOnInit() {
    this.updateProgressBar();
  }

  changePer() {
    this.updateProgressBar();
  }

  public updateProgressBar() {
    const a = -3.46;
    const b = 440;
    const finalOffset = Math.round(a * this.precentage + b);
    
    const concernedCircle = document.querySelector('.filled') as HTMLElement;
    concernedCircle.style.strokeDashoffset = finalOffset + '';
  }
}

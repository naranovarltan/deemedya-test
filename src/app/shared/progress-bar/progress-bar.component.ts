import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input()step: number;
  @ViewChild('stepOne') stepOne: ElementRef;
  @ViewChild('stepTwo') stepTwo: ElementRef;
  @ViewChild('line') line: ElementRef;

  public backgroundColor: string = 'chartreuse';

  constructor() {}

  ngOnInit() {
    if (this.step === 2) {
      this.stepOne.nativeElement.style.content = '3';
      this.stepTwo.nativeElement.style.backgroundColor = this.backgroundColor;
      this.line.nativeElement.style.borderTopColor = this.backgroundColor;
    }
  }

}

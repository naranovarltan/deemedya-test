import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrls: ['./form-step-one.component.css']
})
export class FormStepOneComponent implements OnInit {

  public step: number = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit (f) {
    this.router.navigate(['/form/steps/two'], 
      { queryParams: 
        { age: f.value.userAge, name: f.value.userName }
      })
  }

}

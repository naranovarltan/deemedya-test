import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form-step-two',
  templateUrl: './form-step-two.component.html',
  styleUrls: ['./form-step-two.component.css']
})
export class FormStepTwoComponent implements OnInit {

  public step:number = 2;
  public userName: any;
  public userAge: any;
  public userPhone: any;
  public userEmail: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.userName = params.name;
        this.userAge = params.age;
      })
  }

}

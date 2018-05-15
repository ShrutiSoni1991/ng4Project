import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj = {
    gender: 'female',
    age: 23,
    location: 'USA'
  }
  myArray = ['him','her','yours'];
  angularLogo="D:\Adso\AngularApp\ng4playground\src\favicon.ico";
  status= true;
  myEvent(event){
    console.log(event);
  }
  constructor() {
  }

  ngOnInit() {
  }

}

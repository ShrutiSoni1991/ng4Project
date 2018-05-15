import { Component, trigger } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'app';
  constructor(private dataService:DataService){


  }
  someProperty:String = '' ;

  ngOnOnint(){
    console.log(this.dataService.cars);
  this.someProperty = this.dataService.myData();
  }
}


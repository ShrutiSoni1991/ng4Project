import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars=['ford','chevy','bmw'];

  myData(){
    return 'This is Data!';
  }
}

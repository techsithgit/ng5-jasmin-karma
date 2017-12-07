import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }
  add(a, b){
    if(!isNaN(a) && !isNaN(b)){
      return a + b;
    } else {
      return 0;
    }

  }

}

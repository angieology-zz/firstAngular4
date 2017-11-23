import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('dataservice connected!');
  }

  getPosts() {
    //fake data service
    return this.http.get('https://jsonplaceholder.typicode.com/posts')//returns observable
    .map(res => res.json());//returns all posts from url as json
  }


}

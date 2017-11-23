import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email:string;
  address:Address;
  hobbies: string[];//array of strings
  hello:any;
  posts: Post[];
  isEdit:boolean = false;

  constructor(private dataService: DataService) { //inject dataservice 
    console.log('constructor ran');
  }

  ngOnInit() {//lifecycle hook
    console.log('ngOnInit ran...');
    this.name = 'Angela L';
    this.age = 27; //must match type
    this.email = 'angelalee@gmail.com'
    this.address = {
      street: '123 fake st.',
      city: 'Toronto',
      state: 'ON'
    };
    this.hobbies = ['write code', 'listen to music', 'hiking'];
    this.hello = 'hello';
    this.dataService.getPosts().subscribe((posts)=> {
      //console.log(posts);
      this.posts = posts;
    });

    }
    onClick() {
      this.name = 'Raina M';
      this.hobbies.push('New Hobby');
    }

    addHobby(hobby) {
      console.log('added ' + hobby)
      this.hobbies.push(hobby);
      return false;
    }
    deleteHobby(hobby) {
      console.log(hobby);
      for(let i = 0; i < this.hobbies.length; i ++){
        if(this.hobbies[i] == hobby) {
          this.hobbies.splice(i, 1);
        }
      }
    }
    toggleEdit() {
      this.isEdit = !this.isEdit;
    }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}
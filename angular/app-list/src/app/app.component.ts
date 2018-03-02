import { Component } from '@angular/core';
import { Friend } from './components/friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  friendList: Friend[] = [{
    name: "John",
    lastName: "Doe",
    age: 27,
    email: "johndoecontact@testcontact.com",
    gender: "male"
  }, {
    name: "Mario",
    lastName: "Rossi",
    age: 32,
    email: "mariorossi@testcontact.com",
    gender: "male"
  }, {
    name: "Lisa",
    lastName: "Do3",
    age: 30,
    email: "lisadoe@testcontact.com",
    gender: "female"
  }];
}

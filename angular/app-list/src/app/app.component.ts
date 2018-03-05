import { Component, OnInit } from '@angular/core';
import { Friend } from './components/friend';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private appService: AppService) {

  }
  title = 'app';
  friendList: Friend[] = [];

  ngOnInit() {
     this.appService.getFriends().subscribe(data => {
      this.friendList = data.data;
    });

  }

}

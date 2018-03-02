import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'friend-list',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendList implements OnInit {
  @Input() list: Array<Friend>;
  title = 'FriendList app';

  removeItem = function (el) {
    console.log('remove item ' + el.name);
    console.log(this.list.indexOf(el));
    if (this.list.indexOf(el) > - 1) {
      this.list.splice(this.list.indexOf(el), 1)
    }
  }

  ngOnInit() {
    console.log(this.list);
    console.log('ready');
  }
}

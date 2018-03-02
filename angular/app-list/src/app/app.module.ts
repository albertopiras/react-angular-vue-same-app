import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FriendList } from './components/friendList/friendList.component';
import { AddFriend } from './components/addFriend/addFriend.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddFriend,
    AppComponent,
    FriendList],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

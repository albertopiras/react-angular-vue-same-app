import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import FriendList from './components/list/FriendList';

class App extends Component {

  render() {

    let friendList = [{
      name: "John",
      lastNane: "Doe",
      age: 27,
      email: "johndoecontact@testcontact.com",
      gender: "male"
    }, {
      name: "Mario",
      lastNane: "Rossi",
      age: 32,
      email: "mariorossi@testcontact.com",
      gender: "male"
    }, {
      name: "Lisa",
      lastNane: "Do3",
      age: 30,
      email: "lisadoe@testcontact.com",
      gender: "female"
    }];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends Application - React</h1>
        </header>
        <div className="container">

          <div className="row">

            <div className="col s12 m4 l4">parte utente
            </div>
            <div className="col s12 m8 l8">
              <FriendList initialList={friendList}></FriendList>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;

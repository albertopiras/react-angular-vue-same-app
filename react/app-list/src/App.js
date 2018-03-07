import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './components/list/FriendList';
import AddFriend from './components/addfriend/AddFriend';
import axios from 'axios';


class App extends Component {

  constructor() {
    super();
    this.state = {
      friendList: []
    }
    this.setState = this.setState.bind(this);
  }

  getFriendList() {
    return axios.get('assets/friends.json');
  }

  onChangeList(newlist){
    this.setState({friendList: newlist});
  }

  componentDidMount() {
    var self = this;
    this.getFriendList().then(function (res) {
      self.setState({ friendList: res.data.data });
    });

  };

  render() {

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
              <FriendList initialList={this.state.friendList} changeParentList={this.onChangeList.bind(this)}></FriendList>
            </div>
          </div>
          <AddFriend initialList={this.state.friendList} changeParentList={this.onChangeList.bind(this)}></AddFriend>
        </div>

      </div>
    );
  }
}

export default App;

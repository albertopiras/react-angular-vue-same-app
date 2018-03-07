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

  onChangeList(newlist) {
    this.setState({ friendList: newlist });
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
            <div className="col s12 m4 l4">
              <div className="card">
                <div className="card-header">
                  <img src='https://placeimg.com/100/100/people' className="" alt="logo" />
                </div>
                <div className="card-body">
                  <p className="card-info">
                    My profile
                    </p>
                  <p className="card-user">
                    My First Name
                    </p>
                  <p><i class="material-icons">local_phone</i>3454654...</p>
                  <p><i class="material-icons">mail</i> udaertestprofile@testemail.com</p>
                  <p><i class="material-icons">link</i> www.usertestblog.com</p>
                </div>
              </div>
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

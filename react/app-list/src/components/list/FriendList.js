import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FriendList extends Component {
  constructor(props) {
    super();
    this.state = {
      list : props.initialList
    }
  }

  /** Used to update values as soon as the parent updates values */
  componentWillReceiveProps(change) {
    this.setState({ list : change.initialList});
}

  gender(el) {
    var result = (el === "male") ? <span>Mr</span> : <span>Ms</span>;
    return (result);
  }

  removeItem(el) {
    console.log(el);
    console.log(this.state.list.indexOf(el));
    if (this.state.list.indexOf(el) > - 1) {
      this.state.list.splice(this.state.list.indexOf(el), 1)
      // this.setState({ list: t });
      this.setState({ list: this.state.list });
    }
  }
  
  render() {
    let arraylist = [];

    // fill up our friend list
    this.state.list.forEach((el, i) => {
      arraylist.push(
        <li className="collection-item avatar" key={i}>
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">{this.gender(el.gender)} {el.name}</span>
          <span>{el.lastNane}</span>
          <p className="item-email">{el.email}</p>
          <a href="#!" onClick={() => this.removeItem(el)} className="secondary-content"><i className="material-icons">delete</i></a>
        </li >
      );
    });

    // console.log(this.props);
    return (
      <ul id="friendsList" className="collection">
        {arraylist}
        {/* or simply {this.props.list.map((el, i) =><li key={i}> name: {el.name}</li>)}*/}
      </ul>
    );
  }
}

FriendList.propTypes = {
  list: PropTypes.array
}

export default FriendList;

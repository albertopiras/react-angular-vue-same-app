/*global $, Materialize*/
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class AddFriend extends Component {
  constructor(props) {
    super();
    this.state = {
      list: props.initialList,
      friendName: '',
      friendLName: '',
      friendEmail: '',
      friendGender: '',
      formErrors: { friendName: '', friendLName: '', friendEmail: '' },
      isNameValid: false,
      isLNameValid: false,
      isEmailValid: false,
      isFormValid: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }



  handleSubmit(event) {
    event.preventDefault();

    let genderElement = document.querySelector('#genderSelect input.select-dropdown');

    let newFriend = {};
    newFriend.name = this.state.friendName;
    newFriend.lastNane = this.state.friendLName;
    newFriend.email = this.state.friendEmail;
    newFriend.gender = genderElement.value;
    newFriend.age = 31;

    console.dir(newFriend);
  }

  handleChange(el) {
    let inputName = el.target.name;
    let inputValue = el.target.value;

    this.setState({ [inputName]: inputValue }, this.validateField(inputName, inputValue));
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;

    let nameValid = this.state.isNameValid;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case 'friendName':
        nameValid = value.length >= 3;
        fieldValidationErrors[fieldName] = nameValid ? 'valido' : ' is too short';
        break;
      case 'friendEmail':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors[fieldName] = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      isNameValid: nameValid,
      isEmailValid: emailValid

    }, this.validateForm);

  }

  validateForm() {
    this.setState({ isFormValid: this.state.isNameValid && this.state.isEmailValid });
  }


  componentDidMount() {
    $('#modalAddFriend').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        // console.log('Modal ready');
      },
      complete: function () {
        // console.log('Modal closed');
      }
    }
    );

    // init Material select 
    $(document).ready(function () {
      $('select').material_select();
    });
  }

  openModal() {
    console.log('modal open');
    $('#modalAddFriend').modal('open');
  }

  getImagepath(path) {
    return "./assets/img/" + path + ".png"
  }

  render() {
    let genders = ['male', 'female'];

    /**  Creates select options **/
    let selectOptions = [];
    genders.forEach((el, i) => {
      selectOptions.push(<option data-icon={this.getImagepath(el)} value={el} key={i}>{el}</option>);
    });


    /**  form error messages -Start  **/
    let nameError, lnameError, emailError = '';

    // if there are errors in input - Name
    if (!this.state.isNameValid) {
      nameError =
        <div class="alert alert-danger">
          <div>{this.state.formErrors['friendName']}</div>
        </div>
    }

    // if there are errors in input - Name
    if (!this.state.isNameValid) {
      nameError =
        <div class="alert alert-danger">
          <div>{this.state.formErrors['friendName']}</div>
        </div>
    }

    // if there are errors in input - Name
    if (!this.state.isLNameValid) {
      lnameError =
        <div class="alert alert-danger">
          <div>{this.state.formErrors['friendLName']}</div>
        </div>
    }

    if (!this.state.isEmailValid) {
      emailError =
        <div class="alert alert-danger">
          <div>{this.state.formErrors['friendEmail']}</div>
        </div>
    }
    /**  form error messages - End **/




    // console.log(this.props);
    return (
      <Fragment>
        <a id="plusButton" onClick={() => this.openModal()} className="btn-floating btn-large waves-effect waves-light red btn" href="javacsript:void(0)">
          <i className="material-icons">add</i>
        </a>
        <div id="modalAddFriend" className="modal">
          <div className="modal-content">
            <div className="row no-margin">
              <h4>Add new friend</h4>
              <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text"
                      onChange={this.handleChange} className="form-control no-margin" minLength="3" id="first_name" required name="friendName" />
                    <label htmlFor="first_name">*First Name</label>
                    {/* -{this.state.friendName} */}
                    {nameError}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" minLength="3" onChange={this.handleChange} className="form-control no-margin" id="last_name" required name="friendLName" />
                    <label htmlFor="last_name">*Last Name</label>
                    {lnameError}
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <div className="input-field">
                      <input id="email" type="email" required onChange={this.handleChange} className="form-control no-margin" name="friendEmail" />
                      <label htmlFor="email" data-error="wrong" data-success="right">*Email</label>
                      {emailError}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <div id="genderSelect" className="input-field">
                      <select onChange={this.handleChange} className="form-control" id="gender" name="friendGender">
                        <option defaultValue="" disabled selected>Choose your option</option>
                        {selectOptions}
                      </select>
                      <label htmlFor="gender">Gender</label>
                    </div >
                  </div >
                </div >
                <button type="submit" className="btn btn-success">Submit</button>
              </form >
            </div >
          </div >
        </div >
      </Fragment >);
  }
}

AddFriend.propTypes = {
  list: PropTypes.array
}

export default AddFriend;

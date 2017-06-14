import React, { Component } from 'react';
import Input from './../../components/sign-up/Input.js';
import _ from 'underscore';
import Icon from './../../components/sign-up/Icon.js';
import "./../../../contents/css/sign-up.css";

class CreateAccountScreen extends Component {
  constructor() {
    super();

    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleConfirmPasswordInput = this.handleConfirmPasswordInput.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.isConfirmedPassword = this.isConfirmedPassword.bind(this);
    this.handleCompanyInput = this.handleCompanyInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.updateStatesValue = this.updateStatesValue.bind(this);

    this.state = {
      email: null,
      companyName: null,
      password: null,
      confirmPassword: null,
      statesValue: null,
      forbiddenWords: ["password", "user", "username"]
    }
  }

  handlePasswordInput(event) {
    if (!_.isEmpty(this.state.confirmPassword)) {
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      password: event.target.value
    });
  }

  handleConfirmPasswordInput(event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  saveAndContinue(e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email)
      && this.refs.password.isValid()
      && this.refs.passwordConfirm.isValid();

    if (canProceed) {
      var data = {
        email: this.state.email,
        state: this.state.statesValue
      }
      alert('Thanks.');
    } else {
      this.refs.email.isValid();
      this.refs.companyName.isValid();
      this.refs.password.isValid();
      this.refs.passwordConfirm.isValid();
    }
  }

  isConfirmedPassword(event) {
    return (event == this.state.password)
  }

  handleCompanyInput(event) {
    this.setState({
      companyName: event.target.value
    })
  }

  handleEmailInput(event) {
    this.setState({
      email: event.target.value
    });
  }

  validateEmail(event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }

  isEmpty(value) {
    return !_.isEmpty(value);
  }

  updateStatesValue(value) {
    this.setState({
      statesValue: value
    })
  }

  render() {
    return (
      <div className="create_account_screen">

        <div className="create_account_form">
          <h1>Create account</h1>
          <p>Example of form validation built with React.</p>
          <form onSubmit={this.saveAndContinue}>

            <Input
              text="Email Address"
              ref="email"
              type="text"
              defaultValue={this.state.email}
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput}
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />

            <Input
              text="Company Name"
              ref="companyName"
              validate={this.isEmpty}
              value={this.state.companyName}
              onChange={this.handleCompanyInput}
              emptyMessage="Company name can't be empty"
            />

            <Input
              text="Password"
              type="password"
              ref="password"
              validator="true"
              minCharacters="8"
              requireCapitals="1"
              requireNumbers="1"
              forbiddenWords={this.state.forbiddenWords}
              value={this.state.passsword}
              emptyMessage="Password is invalid"
              onChange={this.handlePasswordInput}
            />

            <Input
              text="Confirm password"
              ref="passwordConfirm"
              type="password"
              validate={this.isConfirmedPassword}
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInput}
              emptyMessage="Please confirm your password"
              errorMessage="Passwords don't match"
            />

            <button
              type="submit"
              className="button button_wide">
              CREATE ACCOUNT
            </button>

          </form>
        </div>
      </div>
    );
  }

};

export default CreateAccountScreen;
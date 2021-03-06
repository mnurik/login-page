import React, { Component } from "react";
import LoginForm from './../../components/login-form';
import './login.css';
import me from './me.png';

class Login extends Component {

  render() {
    return (
      <div className="container">
        <div className="inner">
          <div className="nav">
            <a href="#" className="menu-activator"><i className="ion-ios-more"></i></a>
            <i className="ion-cube"></i>
            <a href="/sign-up" className="white link">
              <i className="ion-ios-redo-outline"></i>
              <i className="ion-ios-redo hidden"></i>
            </a>
          </div>
          <div className="panel panel-left">
            <div className="panel-content">
              <img className="image-background" src={me} />
            </div>
          </div>
          <div className="panel panel-right">
            <div className="panel-content">
              <LoginForm />
            </div>
          </div>
        </div>
      </div >
    );
  }
};

export default Login;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Login from "./../Login/Login";
import SignUp from './../SignUp/SignUp';

class App extends Component {
  render() {
    return <div className="App">
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/sign-up'} component={SignUp} />
    </div>;
  }
}

export default App;
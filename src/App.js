import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./js/pages/login";
import CreateAccountScreen from './js/pages/sign-up/CreateAccountScreen.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={'/'} component={Login} />
          <Route exact path={'/sign-up'} component={CreateAccountScreen} />
        </div>
      </Router>
    );
  }
}

export default App;

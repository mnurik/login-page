import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./js/pages/login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path={'/'} component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

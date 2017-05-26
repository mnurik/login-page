import React, {Component} from "react";
import CreateAccountScreen from './CreateAccountScreen.js';
import "./../../../contents/css/sign-up.css";

class App extends Component{
  render() {
    return (
      <div className="application_wrapper">
        <div className="application_routeHandler">
            <CreateAccountScreen/>
        </div>
      </div>
    );
  }
  
};
  
export default App;
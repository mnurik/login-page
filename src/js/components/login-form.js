import React, { Component } from "react";

class LoginForm extends Component {
    render() {
        return (
            <form className="form">
                <h1>{'Authenticate'}</h1>
                <div className="group">
                    <input type="text" required />
                    <span className="highlight"></span>
                    <label>{'Your username'}</label>
                </div>
                <div className="group">
                    <input type="password" required />
                    <span className="highlight"></span>
                    <label>{'Your password'}</label>
                </div>
                <a className="send-btn">{'Enter'}</a>
            </form>
        )
    }
};

export default LoginForm;
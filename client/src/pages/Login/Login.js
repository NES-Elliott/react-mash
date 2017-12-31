import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      console.log(this.state.username);
      console.log(this.state.password);
    } else alert("Invalid Username or Password.");
  };

  render() {
    return (
      <div>
        <h1>Welcome to Mash</h1>
        <h4>Please Log-In</h4>
        <form>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Username"
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <div>
            <input id="remember-me" type="checkbox" />
            <label for="remember-me">Remember me on this device</label>
          </div>
          <button
            onClick={this.handleFormSubmit}
            disabled={!this.state.username && this.state.password}
          >Log In</button>
        </form>
        <a><h4>Forgot your password?</h4></a>
        <a><h4>First time here?</h4></a>
        <a><p>If you would not like to make an account at this time, please click here</p></a>
      </div>
    );
  }
}

export default Login;

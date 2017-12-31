import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirm: ""
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
        <h4>Enter the information below to sign-up.</h4>
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
          <input
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleInputChange}
            placeholder="Confirm Password"
          />
          <button
            onClick={this.handleFormSubmit}
            disabled={!this.state.username && this.state.password}
          >Sign Up</button>
        </form>
        <a><p>If you would not like to make an account at this time, please click here</p></a>
      </div>
    );
  }
}

export default Signup;

import React, { Component } from "react";
// import API from "../../utils/API";
import { Link, Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Handle Submit")
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.props)
    this.props._login(this.state.username, this.state.password)
    // this.setState({
    //   redirectTo: "/"
    // })
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <h1>Welcome to Mash</h1>
          <h4>Please Log-In</h4>
          <form method="post">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Username"
            />
            <input
              type="password"
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
              type="submit"
              onClick={this.handleFormSubmit}
              disabled={!this.state.username && this.state.password}
            >Log In</button>
          </form>
          <a><h4>Forgot your password?</h4></a>
          <a><h4>First time here?</h4></a>
          <a><p>If you would not like to make an account at this time, please click here</p></a>
        </div>
      )
    }
  }
}

export default LoginForm;

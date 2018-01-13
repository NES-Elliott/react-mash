import React, { Component } from "react";
// import API from "../../utils/API";
import axios from "axios"
import { Link, Redirect } from "react-router-dom";

class SignupForm extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
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
    if (!(this.state.password === this.state.passwordConfirm)) {
      return alert("Please make sure the password matches.")
    } else {
      axios
        .post("http://localhost:3000/auth/signup", {
          username: this.state.username,
          password:this.state.password
        })
        .then(response => {
          console.log(response)
          if(!response.data.errmsg) {
            console.log("you're good")
            this.setState({
              redirectTo: "/login"
            })
          } else {
            console.log("duplicate")
          }
        })
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div>
          <h1>Welcome to Mash</h1>
          <h4>Enter the information below to sign-up.</h4>
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
            <input
              type="password"
              name="passwordConfirm"
              value={this.state.passwordConfirm}
              onChange={this.handleInputChange}
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              onClick={this.handleFormSubmit}
              disabled={!this.state.username && this.state.password}
            >Sign Up</button>
          </form>
          <a><p>If you would not like to make an account at this time, please click here</p></a>
        </div>
      );
    }
  }
}

export default SignupForm;

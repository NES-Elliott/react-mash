import React, { Component } from "react"
import { Link } from "react-router-dom"
import Auth from "../../modules/Auth"

// HANDLES FORM DATA POST TO DATABASE AND VERIFIES

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    Auth.login({ username: this.state.username, password: this.state.password })
    .then(res => {
      console.log(res)
      this.setState({
        username: "",
        password: ""
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <form>
          <h2>Login</h2>

          <div>
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
          </div>
          <div>
            <input id="remember-me" type="checkbox" />
            <label for="remember-me">Remember me on this device</label>
          </div>
          <button
            type="submit"
            onClick={this.handleFormSubmit}
          >Log In</button>
        </form>

        <a><h4>Forgot your password?</h4></a>
        <a><h4>First time here?</h4></a>
        <a><p>If you would not like to make an account at this time, please click here</p></a>
    </div>
    )
  }
}

export default LoginForm

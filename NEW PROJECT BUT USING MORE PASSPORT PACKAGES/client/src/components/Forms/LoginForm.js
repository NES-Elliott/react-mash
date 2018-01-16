import React, { Component } from "react"
import { Link } from "react-router-dom"
import Auth from "../../modules/Auth"

// HANDLES FORM DATA POST TO DATABASE AND VERIFIES

/*
TO DO
pass user data to LoginPage.js
pass success or fail to LoginPage.js
*/

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
    Auth.loginUser({ username: this.state.username, password: this.state.password })
    .then(res => {
      console.log(res)
      if (res.status === 200) {
        console.log("User is now logged in.")
        this.setState({
          username: "",
          password: ""
        })
        this.props.loginStatus(true, { username: res.data.username, id: res.data._id})
      } else {
        console.log(false) // This will be sent to loginpage to display an error message
      }
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
            <label htmlFor="remember-me">Remember me on this device</label>
          </div>
          <button
            type="submit"
            onClick={this.handleFormSubmit}
          >Log In</button>
        </form>

        <a><h4>Forgot your password?</h4></a>
        <Link to="/signup">First time here?</Link>
    </div>
    )
  }
}

export default LoginForm

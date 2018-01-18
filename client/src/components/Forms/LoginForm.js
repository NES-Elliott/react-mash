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
        <div className="row">
          <form>
            <h2 className="section-header">Login</h2>

            <div className="form-group">
              <label htmlFor="login-username" className="section-subheader">Username</label>
              <input
                className="form-control"
                id="login-username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password" className="section-subheader">Password</label>
              <input
                className="form-control"
                id="login-password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input id="remember-me" type="checkbox" />
              <label htmlFor="remember-me" className="basic-text">Remember me on this device</label>
            </div>
            <div>
              <Link to="/signup" className="mash-link">First time here?</Link>
            </div>
            <button
              className="btn btn-outline-light"
              type="submit"
              onClick={this.handleFormSubmit}
            ><span className="reg-button">Log In</span></button>
          </form>
        </div>
    </div>
    )
  }
}

export default LoginForm

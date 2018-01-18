import React, { Component } from "react"
import { Link } from "react-router-dom"
import Auth from "../../modules/Auth"
// HANDLES FORM DATA POST TO DATABASE

class SignupForm extends Component {
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
    Auth.signupUser({ username: this.state.username, password: this.state.password })
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
        <div className="row">
          <form>
            <h2 className="section-header">Sign Up</h2>

            <div className="form-group">
              <label htmlFor="signup-username" className="section-subheader">Username</label>
              <input
                className="form-control"
                id="signup-username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password" className="section-subheader">Password</label>
              <input
                className="form-control"
                id="signup-password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button
                className="btn btn-outline-light reg-button"
                type="submit"
                onClick={this.handleFormSubmit}
              ><span className="reg-button">Sign Up</span></button>
            </div>

            <p className="basic-text">Already have an account? <Link to={"/login"} className="mash-link">Log in</Link></p>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm

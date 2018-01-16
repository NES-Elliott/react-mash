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
        <form>
          <h2>Sign Up</h2>

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
            <button
              type="submit"
              onClick={this.handleFormSubmit}
            >Sign Up</button>
          </div>

          <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
        </form>
      </div>
    )
  }
}

export default SignupForm

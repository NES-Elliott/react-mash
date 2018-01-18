import React, { Component } from "react"
import LoginForm from "../components/Forms/LoginForm"

class LoginPage extends Component {

  render() {
    return (
      <div>
        <LoginForm loginStatus={this.props.loginStatus} />
      </div>
    )
  }
}

export default LoginPage

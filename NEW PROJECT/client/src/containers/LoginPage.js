import React, { Component } from "react"
import LoginForm from "../components/Forms/LoginForm"
import Auth from "../modules/Auth"

// HANDLES THE SUCCESS OR FAILURE MESSSAGE AND REDIRECT

class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      isSuccess: false
    }
  }

  render() {
    return (
      <LoginForm />
    )
  }
}

export default LoginPage

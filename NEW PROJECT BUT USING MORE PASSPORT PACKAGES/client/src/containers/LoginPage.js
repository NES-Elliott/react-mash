import React, { Component } from "react"
// import { Redirect } from 'react-router-dom'
import LoginForm from "../components/Forms/LoginForm"

// HANDLES THE SUCCESS OR FAILURE MESSSAGE AND REDIRECT

/*
TO DO
pass loggedIn state to LoginPage.js
pass user to LoginPage.js
*/

class LoginPage extends Component {
  state = {
    isSuccess: false
  }

  // componentDidMount() {
  //   if (this.props.loggedIn) {
  //     return <Redirect to={{ pathname: "/" }} />
  //   }
  // }

  render() {
    return (
      <LoginForm isSuccess={this.state.isSuccess} loginStatus={this.props.loginStatus} />
    )
  }
}

export default LoginPage

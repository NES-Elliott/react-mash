import React from "react"
import PropTypes from "prop-types"
import Auth from "../utils/Auth"
import LoginForm from "../components/Forms/LoginForm"

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    const storedMessage = localStorage.getItem("successMessage")
    let successMessage = ""

    if (storedMessage) {
      successMessage = storedMessage
      localStorage.removeItem("successMessage")
    }

    this.state = {
      errors: {},
      successMessage,
      user: {
        username: "",
        password: ""
      }
    }
    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  /**
   * Process the form
   *
   * @param {object} event
   */
  processForm(event) {
    event.preventDefault()

    const username = encodeURIComponent(this.state.user.username)
    const password = encodeURIComponent(this.state.user.password)
    const formData = `username=${username}&password=${password}`

    const xhr = new XMLHttpRequest();
    xhr.open("post", "/auth/login")
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.responseType = "json"
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        // success
        // change the component-container state
        this.setState({
          errors: {}
        })
        // save the token
        Auth.authenticateUser(xhr.response.token)
        // update authenticate state
        this.props.toggleAuthenticateStatus()
        // redirect signed in user to profile
        this.props.history.push("/")
      } else {
        // failure
        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {}
        errors.summary = xhr.response.message

        this.setState({
          errors
        })
      }
    })
    xhr.send(formData)
  }

  /**
   * Change the user object
   *
   * @param {object} event
  */
  changeUser(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  /**
   * Render the component
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        user={this.state.user}
      />
    )
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginPage

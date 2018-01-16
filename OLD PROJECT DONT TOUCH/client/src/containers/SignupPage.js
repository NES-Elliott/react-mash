import React from "react"
import PropTypes from "prop-types"
import SignupForm from "../components/Forms/SignupForm"

class SignupPage extends React.Component {

  /**
   * Class contructor
   */
  constructor(props, context) {
    super(props, context)
    // set the initial component state
    this.state = {
      errors: {},
      user: {
        username: "",
        password: ""
      }
    }
    this.processForm = this.processForm.bind(this)
    this.changeUser = this.processForm.bind(this)
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

    const xhr= new XMLHttpRequest()
    xhr.open("post", "/auth/signup")
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.responseType = "json"
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        // change the component-container state
        this.setState({
          errors: {}
        })
        // set a message
        localStorage.setItem('successMessage', xhr.response.message)
        // redirect user after sign up to login page
        this.props.history.push('/login')
      } else {
        // failure
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
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
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
   * Render the component.
   */
  render() {
    return (
      <SignupForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }

}

SignupPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignupPage

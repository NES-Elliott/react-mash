import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticationStatus
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2>Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChange}
          errorText={errors.password}
          placeholder="Password"
        />
      </div>
      <div>
        <input id="remember-me" type="checkbox" />
        <label for="remember-me">Remember me on this device</label>
      </div>
      <button
        type="submit"
      >Log In</button>
    </form>

    <a><h4>Forgot your password?</h4></a>
    <a><h4>First time here?</h4></a>
    <a><p>If you would not like to make an account at this time, please click here</p></a>
  </div>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm

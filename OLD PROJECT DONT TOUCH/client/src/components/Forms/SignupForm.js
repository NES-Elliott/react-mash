import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div>
        <input
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
        <input
          name="password"
          value={user.password}
          onChange={onChange}
          errorText={errors.password}
          placeholder="Password"
        />
      </div>
      <div>
        <button
          type="submit"
        >Sign Up
        </button>
      </div>

      <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
    </form>
  </div>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default SignUpForm
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

class Nav extends Component {
  isLoggedIn = () => {
    if (this.props.loggedIn) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/market">Market</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={this.props.logout} to="/">Logout</Link>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/market">Market</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Mash</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {this.isLoggedIn()}
        </div>
      </nav>
    )
  }
}

export default Nav

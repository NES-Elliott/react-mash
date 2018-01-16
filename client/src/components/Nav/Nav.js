import React, { Component } from "react";

class Nav extends Component {

  render() {
    if (this.props.loggedIn === false) {
      return (
        <nav className="navbar navbar-inverse navbar-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="collapsed navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" /> <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="/" className="navbar-brand">Mash</a>
              <ul className="nav navbar-nav">
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup">Sign Up</a></li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
  }
}

export default Nav

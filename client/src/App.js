import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// CONTAINERS
import HomePage from "./containers/HomePage"
import LoginPage from "./containers/LoginPage"
import SignupPage from "./containers/SignupPage"
// import ProfilePage from "./containers/ProfilePage"
// COMPONENTS
import NoMatch from "./components/NoMatch";
// MODULES
import Auth from "./modules/Auth"
// -----------------------------

class App extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }
  state = {
    loggedIn: false,
    user: null
  }

  componentDidMount() {
    Auth.loginCheck()
      .then(res => {
        if (res) {
          console.log(res)
          this.setState({
            loggedIn: true,
            user: {
              username: res.data.username,
              id: res.data.id
            }
          })
        }
      })
  }

  loginStatus = (loggedIn, user) => {
    this.setState({
      loggedIn,
      user
    })
  }

  logout(event) {
    event.preventDefault()
    console.log("Logging User out.")
    Auth.logoutUser()
      .then(response => {
        console.log(response.data)
        if (response.status === 200) {
          console.log("User is logged out.")
          this.setState({
            loggedIn: false,
            user: null
          })
        }
      })
  }

  render() {
    return (
      <Router>
        <div>
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
                  <li><a onClick={this.logout}>Log Out</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" render={() => <HomePage user={this.state.user} />} />
            <Route exact path="/login" render={() => <LoginPage loggedIn={this.state.loggedIn} loginStatus={this.loginStatus} />} />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// IF LOGGED IN, only display LOGOUT and PROFILE button in navbar,
// IF LOGGED OUT, only display LOGIN and SIGNUP button in navbar
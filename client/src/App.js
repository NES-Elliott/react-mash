import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// CONTAINERS
import HomePage from "./containers/HomePage"
import LoginPage from "./containers/LoginPage"
import SignupPage from "./containers/SignupPage"
import ProfilePage from "./containers/ProfilePage"
import MarketPage from "./containers/MarketPage"
// COMPONENTS
import Nav from "./components/BSComponents/Nav/Nav"
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
    loggedOut: false,
    user: null
  }

  componentDidMount() {
    Auth.loginCheck()
      .then(res => {
        if (res.data) {
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

  backToHome = () => {
    return (
      <Redirect to="/" />
    )
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
            loggedOut: true,
            user: null
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

  availableRoutes = () => {
    if (this.state.loggedIn) {
      return (
        <Switch>
          <Route exact path="/" render={() => <HomePage loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/market" render={() => <MarketPage loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/profile" render={() => <ProfilePage user={this.state.user} />} />
          <Route component={NoMatch} />
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route exact path="/" render={() => <HomePage loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/market" render={() => <MarketPage loggedIn={this.state.loggedIn} />} />
          <Route exact path="/login" render={() => <LoginPage loggedIn={this.state.loggedIn} loginStatus={this.loginStatus} />} />
          <Route exact path="/signup" component={SignupPage} />
          <Route component={NoMatch} />
        </Switch>
      )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.loggedIn} logout={this.logout} />
          {this.availableRoutes()}
        </div>
      </Router>
    );
  }
}

export default App;

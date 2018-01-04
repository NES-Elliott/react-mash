import React, { Component } from "react";
import axios from "axios";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._login = this._login.bind(this)
    this._logout = this._login.bind(this)
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/auth/user")
      .then(response => {
        console.log(response.data)
        if(!!response.data.user) {
          console.log("There is a user.")
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        } else {
          this.setState({
            loggedIn: false,
            user: null
          })
        }
      })
  }

  _login(username, password) {
    axios
      .post("http://localhost:3001/auth/login", {
        username,
        password
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        }
      })
  }

  _logout(event) {
    event.preventDefault()
    console.log("Logging out")
    axios
      .post("http://localhost:3001/auth/logout")
      .then(response => {
        console.log(response.data)
        if (response.status === 200) {
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
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} render={() => <Home user={this.state.user} />} />
            <Route exact path="/login" render={() => <LoginForm _login={this._login} />} />
            <Route exact path="/signup" component={SignupForm} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import axios from "axios"
// CONTAINERS
import HomePage from "./containers/HomePage"
import LoginPage from "./containers/LoginPage"
import SignupPage from "./containers/SignupPage"
// import ProfilePage from "./containers/ProfilePage"
// COMPONENTS
import Nav from "./components/Nav";
import NoMatch from "./components/NoMatch";
// MODULES
// import Auth from "./modules/Auth"
// -----------------------------

// HANDLES OUR LOGGED IN AND LOGGED OUT STATE

class App extends Component {
  // constructor() {
  //   super()
  //   console.log(this)
  //   this.state = {
  //     loggedIn: false,
  //     user: null
  //   }
  // }
  state = {
    loggedIn: false,
    user: null
  }


  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <HomePage user={this.state.user} />} />
            <Route exact path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     Auth.isUserAuthenticated() ? (
//       <Component {...props} {...rest} />
//     ) : (
//       <Redirect to={{
//         pathname: "/",
//         state: { from: props.location }
//       }} />
//     )
//   )} />
// )

// const LoggedOutRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     Auth.isUserAuthenticated() ? (
//       <Redirect to={{
//         pathname: "/",
//         state: { from: props.location }
//       }} />
//     ) : (
//       <Component {...props} {...rest} />
//     )
//   )} />
// )

// const PropsRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     <Component {...props} {...rest} />
//   )} />
// )

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loggedIn: false,
//       user: null
//     }
//     this._login = this._login.bind(this)
//     this._logout = this._login.bind(this)
//   }

//   componentDidMount() {
//     this.toggleAuthenticateStatus()
//     // axios
//     //   .get("http://localhost:3000/auth/user")
//     //   .then(response => {
//     //     console.log(response.data)
//     //     if(!!response.data.user) {
//     //       console.log("There is a user.")
//     //       this.setState({
//     //         loggedIn: true,
//     //         user: response.data.user
//     //       })
//     //     } else {
//     //       this.setState({
//     //         loggedIn: false,
//     //         user: null
//     //       })
//     //     }
//     //   })
//   }

//   toggleAuthenticateStatus() {
//     this.setState({ loggedIn: Auth.isUserAuthenticated() })
//   }

//   _login(username, password) {
//     axios
//       .post("http://localhost:3000/auth/login", {
//         username,
//         password
//       })
//       .then(response => {
//         console.log(response)
//         if (response.status === 200) {
//           this.setState({
//             loggedIn: true,
//             user: response.data.user
//           })
//         }
//       })
//   }

//   _logout(event) {
//     event.preventDefault()
//     console.log("Logging out")
//     axios
//       .post("http://localhost:3000/auth/logout")
//       .then(response => {
//         console.log(response.data)
//         if (response.status === 200) {
//           this.setState({
//             loggedIn: false,
//             user: null
//           })
//         }
//       })
//   }
import React, { Component } from "react";
// import axios from "axios"
// import API from "../../utils/API";
import { Link } from "react-router-dom";

class Home extends Component {
  // constructor() { super() }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Welcome {this.props.user || "Guest"}</h1>
        </div>
      </div>
    );
  }
}

export default Home;

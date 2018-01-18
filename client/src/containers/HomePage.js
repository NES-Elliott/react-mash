import React, { Component } from "react"
import ArticleComp from "../components/ArticleComp"
import { Link } from "react-router-dom"
import { Carousel } from "../components/BSComponents/Carousel/Carousel"
import "./CSS/HomePage.css"

class HomePage extends Component {

  render() {
    return (
      <div className="container page">
        <div className="row">
          <div className="col-12">
            <Carousel loggedIn={this.props.loggedIn} user={this.props.user} />
          </div>
        </div>
        <div className="row content">
          <div className="col-12">
            <ArticleComp loggedIn={this.props.loggedIn} user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage

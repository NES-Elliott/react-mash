import React from "react"
import { Link } from "react-router-dom"
import image1 from "./images/carouselimg1.jpg"
import image2 from "./images/carouselimg2.jpg"
import image3 from "./images/carouselimg3.jpg"

export const Carousel = ({ loggedIn, user }) => {
  const renderWelcomeText = () => {
    if (loggedIn) {
      return (
        <h5>Welcome {user.username} to Mash!</h5>
      )
    } else {
      return (
        <h5>Welcome to Mash! We recommend you register an account.</h5>
      )
    }
  }
  return (
    <div className="carouselSize">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image1} alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              {renderWelcomeText()}
              <p>Photo by JESHOOTS.COM on Unsplash</p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/market"><img className="d-block w-100" src={image2} alt="Second slide"/></Link>
            <div className="carousel-caption d-none d-md-block">
              <h5>Checkout the Marketplace</h5>
              <p>Photo by Aldric RIVAT on Unsplash</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image3} alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Share us on your Social Media!</h5>
              <p>Photo by William Iven on Unsplash</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
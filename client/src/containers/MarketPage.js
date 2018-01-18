import React, { Component } from "react"
import ListingForm from "../components/Forms/ListingForm"
import { ListingCard } from "../components/BSComponents"
import API from "../modules/API"

class MarketPage extends Component {
  state = {
    listings: []
  }

  componentDidMount() {
    this.initialPopulate()
  }

  initialPopulate () {
    API.getListings()
    .then(res => {
      this.setState({
        listings: res.data
      })
    })
  }

  canCreateListing = () => {
    if (this.props.loggedIn) {
      return (
        <ListingForm user={this.props.user} />
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Marketplace</h1>
        {this.canCreateListing()}
        <h3>Listings</h3>
        {
          this.state.listings.map((listing, x) => {
            x+1
            return (
              <ListingCard
                name={listing.name}
                seller={listing.seller}
                sellerId={listing.sellerId}
                platform={listing.platform}
                genre={listing.genre}
                price={listing.price}
                description={listing.description}
                id={listing._id}
                key={x}
              />
            )
          })
        }
      </div>
    );
  }
}

export default MarketPage

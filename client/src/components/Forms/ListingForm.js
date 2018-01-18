import React, { Component } from "react"
import API from "../../modules/API"

class ListingForm extends Component {
  state = {
    productName: "",
    platform: "",
    genre: "",
    price: "",
    description: "",
    seller: "",
    sellerId: ""
  }

  componentDidMount() {
    this.setState({
      seller: this.props.user.username,
      sellerId: this.props.user.id
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    API.createNewListing({
      name: this.state.productName,
      platform: this.state.platform,
      genre: this.state.platform,
      price: this.state.price,
      description: this.state.description,
      image: "",
      seller: this.state.seller,
      sellerId: this.state.sellerId
    })
    .then(res => {
      console.log(res)
      this.setState({
        productName: "",
        platform: "",
        genre: "",
        price: "",
        description: ""
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Create a Listing
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a Listing</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="item-name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="item-name"
                      name="productName"
                      value={this.state.productName}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item-platform">Platform</label>
                    <input
                      type="text"
                      className="form-control"
                      id="item-platform"
                      name="platform"
                      value={this.state.platform}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item-genre">Genre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="item-genre"
                      name="genre"
                      value={this.state.genre}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item-price">Asking Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="item-price"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item-description">Description</label>
                    <textarea
                      className="form-control"
                      id="item-description"
                      rows="3"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputFile">Upload a Picture</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                    <small id="fileHelp" className="form-text text-muted">Choose a file with an image extension from your computer.</small>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingForm

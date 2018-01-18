import React from "react"

export const ListingCard = ({ name, seller, sellerId, platform, genre, price, description, id }) => {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="section-header"> {name} </h3>
          <h6 className="market-subheader">by {seller} asking for {price}</h6>
          <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#${id}`}>
            <span className="basic-text">See Details</span>
          </button>
        </div>
      </div>
        <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a Listing</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <div className="col-8 bold-text">
                          No Image Provided
                        </div>
                        <div className="col-4 itemsell-name">
                          {name}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="row">
                        <div className="col-12 itemsell-seller">
                          Seller: {seller}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 itemsell-price">
                          Asking Price: {price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-6 itemsell-platform">
                          Platform: {platform}
                        </div>
                        <div className="col-6 itemsell-genre">
                          Genre: {genre}
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-12 itemsell-description">
                          Description: {description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

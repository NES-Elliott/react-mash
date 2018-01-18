import React from "react"

export const ListingCard = ({ name, seller, sellerId, platform, genre, price, description, id }) => {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title"> {name} </h3>
          <h6 className="card-subtitle mb-2 text-muted">by {seller} asking for {price}</h6>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${id}`}>
            See Details
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
                {description}
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

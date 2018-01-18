const db = require("../models")
const Listing = require("../models/listing")

module.exports = {
  // FIND ALL LISTINGS
  findAllListings: function(req, res) {
    db.Listing
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // FIND LISTING BY ID
  findListingById: function(req, res) {
    db.Listing
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // CREATE NEW LISTING
  createNewListing: function(req, res) {
    db.Listing
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // DELETE LISTING
  removeListing: function(req, res) {
    db.Listing
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
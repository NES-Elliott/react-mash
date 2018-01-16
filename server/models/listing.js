const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String,
  seller: String
});

module.exports = mongoose.model("Listing", ListingSchema)

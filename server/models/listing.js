const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  name: String,
  platform: String,
  genre: String,
  price: String,
  description: String,
  image: String,
  seller: String,
  sellerId: String
});

module.exports = mongoose.model("Listing", ListingSchema)

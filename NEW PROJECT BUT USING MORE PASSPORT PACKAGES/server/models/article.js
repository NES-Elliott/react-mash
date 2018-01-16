const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  source: String,
  link: String,
  image: String,
  timePublished: String
});

module.exports = mongoose.model("Article", ArticleSchema)

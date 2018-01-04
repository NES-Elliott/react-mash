var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  title: String,
  author: String,
  source: String,
  link: String,
  image: String,
  timePublished: String
});

var Articles = mongoose.model("Articles", ArticlesSchema);
// Export the Articles model
module.exports = Articles;

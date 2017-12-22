var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
  articleTitle: String,
  articleSummary: String,
  articleLink: String,
  articleAuthor: String,
  authorLink: String,
  // ASSOCIATION
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }
});

var Articles = mongoose.model("Articles", ArticlesSchema);
// Export the Articles model
module.exports = Articles;

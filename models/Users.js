var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UsersSchema = new Schema({
  username: String,
  password: String,
  savedArticles: { type: Array, default: [] }
});

var Users = mongoose.model("Users", UsersSchema);
// Export the Users model
module.exports = Users;

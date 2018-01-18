const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: String,
  email_1: { type: String, require: false, unique: false },
  savedArticles: Array,
  postedListings: Array
});

User.plugin(passportLocalMongoose, {
  usernameUnique: true
});

module.exports = mongoose.model('User', User);
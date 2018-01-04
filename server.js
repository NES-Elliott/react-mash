// ~~~ PACKAGES & GLOBAL ~~~
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const passport = require('./passport')
const PORT = process.env.PORT || 3001;
// -------------------------------------------------------------------------------------------------------------------

// ~~~ MIDDLEWARE ~~~
// MORGAN & BODYPARSER
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// DATABASE
var dbName = "MashDB";
var db = require("./models");

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/${dbName}`,
  {
    useMongoClient: true
  }
);
var monDB = mongoose.connection;
monDB.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
monDB.once("open", function() {
  console.log("Mongoose connection successful.");
});

// PASSPORT & REACT CONNECTION
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static("client/build"));

// ROUTES
app.use('/auth', require('./routes/auth'))
app.use("/api", require("./routes/game-articles/index"))

//  ERROR HANDLER
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
});

// START
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
// -------------------------------------------------------------------------------------------------------------------
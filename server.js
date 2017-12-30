// PACKAGES
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
// -------------------------------------------------------------------------------------------------------------------

// DATABASE & SERVER
var db = require("./models");
var dbName = "MashDB";
var PORT = process.env.PORT || 3000;
var app = express();
// -------------------------------------------------------------------------------------------------------------------

// MORGAN LOGGER & BODYPARSER
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static("public"));
// -------------------------------------------------------------------------------------------------------------------

// MONGOOSE
mongoose.Promise = Promise;
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
  });
} else {
  mongoose.connect("mongodb://localhost/" + dbName, {
    useMongoClient: true
  });
};
var monDB = mongoose.connection;
monDB.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
monDB.once("open", function() {
  console.log("Mongoose connection successful.");
});
// -------------------------------------------------------------------------------------------------------------------

// ROUTES
require("./apiRoutes/kotaku-scrape")(app, axios, cheerio, db);
require("./apiRoutes/polygon-scrape")(app, axios, cheerio, db);
require("./apiRoutes/pcgamer-scrape")(app, axios, cheerio, db);
require("./apiRoutes/gamespot-scrape")(app, axios, cheerio, db);
// -------------------------------------------------------------------------------------------------------------------

// START
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
// -------------------------------------------------------------------------------------------------------------------
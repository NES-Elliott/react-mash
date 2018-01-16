// THIS IS THE EXPERIMENTAL BRANCH
// ~~~ PACKAGES & GLOBAL ~~~
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const passport = require("passport")
const PORT = process.env.PORT || 3001
// -------------------------------------------------------------------------------------------------------------------

// ~~~ MIDDLEWARE ~~~
// MORGAN & BODYPARSER
app.use(morgan("dev")) // Uses morgan for colored response statuses
app.use(bodyParser.urlencoded({ extended: false }))

// MONGO
const dbName = "MashDB"
const db = require("./models")

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/${dbName}`,
  {
    useMongoClient: true
  }
)
const monDB = mongoose.connection

monDB.on("error", function(err) {
  console.log("Mongoose Error: ", err)
})
monDB.once("open", function() {
  console.log("Mongoose connection successful.")
})

// PASSPORT
require("./passport/index")(passport)
app.use(passport.initialize())
app.use(passport.session())

// USE REACT
app.use(express.static("client/build"))

// ROUTES
app.use("/auth", require("./routes/auth/index"))
app.use("/api/articles", require("./routes/game-articles/index"))

//  ERROR HANDLER
app.use(function(err, req, res, next) {
	console.log("====== ERROR =======")
	console.error(err.stack)
	res.status(500)
})

// START
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!")
})
// -------------------------------------------------------------------------------------------------------------------
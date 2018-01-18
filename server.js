// ~~~ PACKAGES & GLOBAL ~~~
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy
const PORT = process.env.PORT || 3001

// ~~~ MIDDLEWARE
// MORGAN, BODYPARSER, COOKIEPARSER
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: 'anything' }))

// MONGO
const db = {
  name: "MashDB",
  models: {
    user: require("./server/models/user")
  }
}
mongoose.Promise = global.Promise
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/${db.name}`,
  {
    useMongoClient: true
  }
)
const monDB = mongoose.connection
monDB.on("error", () => {
  console.log("Mongoose Error: ", err)
})
monDB.once("open", () => {
  console.log("Mongoose connection successful")
})

// PASSPORT
app.use(passport.initialize()) // initialize
app.use(passport.session()) // session
passport.use(new LocalStrategy(db.models.user.authenticate()))
passport.serializeUser(db.models.user.serializeUser())
passport.deserializeUser(db.models.user.deserializeUser())

// USE REACT
app.use(express.static("client/build"))

// ROUTES
app.use("/auth", require("./server/routes/auth"))
app.use("/articles", require("./server/routes/game-articles/index"))
app.use("/market", require("./server/routes/market"))
// START
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
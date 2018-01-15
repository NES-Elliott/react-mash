// ~~~ PACKAGES & GLOBAL ~~~
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const passport = require("passport")
const config = require('./config')
const PORT = 3001

// ~~~ MIDDLEWARE
// MORGAN & BODYPARSER
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))

// MONGO
const db = {
  name: "MashDB",
  models: require("./server/models")
}
require('./server/models').connect(
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
// strategies
const localSignupStrategy = require('./server/passport/local-signup')
const localLoginStrategy = require('./server/passport/local-login')
passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)
// authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check')
app.use('/api', authCheckMiddleware)

// USE REACT
app.use(express.static("client/build"))

// ROUTES
app.use('/auth', require('./server/routes/auth'))
// app.use('/api', require('./server/routes/api'))

// START
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
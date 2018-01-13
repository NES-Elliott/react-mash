// ~~~ PACKAGES & GLOBAL ~~~
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const passport = require("passport")
const config = require('./config');
const PORT = 3001

// ~~~ MIDDLEWARE
// MORGAN & BODYPARSER
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))

// MONGO
// connect to the database and load models
require('./server/models').connect(config.dbUri);
// PASSPORT
// pass the passport middleware
app.use(passport.initialize());
// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);
// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// USE REACT
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// ROUTES
// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// START
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/Users')

const strategy = new LocalStrategy(
	{
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
	},
	function(req, username, password, done) {
    User.findOne({ "local.username": username }, function(err, user) {
      if (err) return done(err)
      if (!user) return done(null, false, { message: "No user found."})
      if (~user.validPassword(password)) return done(null, false, { message: "Wrong password." })
      return done(null, user)
    })
	}
)

module.exports = strategy

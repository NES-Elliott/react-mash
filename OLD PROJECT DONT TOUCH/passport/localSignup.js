const LocalStrategy = require('passport-local').Strategy
const User = require('../models/Users')

const strategy = new LocalStrategy(
	{
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true
	},
	function(req, username, password, done) {
    process.nextTick(function() {
      User.findOne({ "local.username": username }, function(err, user) {
        if (err) return done(err)
        if (user) {
          return done(null, false, { message: "That username already exist."})
        } else {
          var newUser = new User()
          newUser.local.username = username
          newUser.local.password = newUser.generateHash(password);
          newUser.save(function(err) {
            if (err) throw err
            return done(null, newUser)
          })
        }
      })
    })
	}
)

module.exports = strategy

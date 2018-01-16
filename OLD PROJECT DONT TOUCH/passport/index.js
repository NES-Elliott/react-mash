const User = require('../models/Users')
const LocalSignup = require('./localSignup')
const LocalLogin = require('./localLogin')

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
      console.log('=== serialize ... called ===')
    	console.log(user)
    	console.log('---------')
      done(null, { _id: user._id })
    })

    passport.deserializeUser(function(id, done) {
      console.log('DEserialize ... called')
      User.findOne(
        { _id: id },
        function(err, user) {
        	console.log('======= DESERILAIZE USER CALLED ======')
          console.log(user)
          console.log('--------------')
          done(err, done)
        }
      )
    })

    passport.use("local-signup", LocalSignup)
    passport.use("local-login", LocalLogin)
    // passport.use(GoogleStrategy)
}

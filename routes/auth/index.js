const express = require('express')
const router = express.Router()
const passport = require("passport")


router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post("/login", (req, res, next) => {
  return passport.authenticate("local-login", (err, token, userData) => {
    if (err) {
      if (err.name === "IncorrectCredentialsError") {
        return res.status(400).json({
          success: false,
          message: err.message
        })

        return res.status(400).json({
          success: false,
          message: "Could not process the form."
        })
      }
    }

    return res.json({
      success: true,
      message: "You have successfully logged in!",
      token,
      user: userData
    })
  })
})

router.post("/signup", (req, res, next) => {
  return passport.authenticate("local-signup", (err) => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "Check the form for errors.",
          errors: {
            email: "This email is already taken."
          }
        })
      }

      return res.status(400).json({
        success: false,
        message: "Could not process the form."
      })
    }

    return res.status(200).json({
      success: true,
      message: "You have successfully signed up! Now you should be able to log in."
    })
  })
})

// router.post('/logout', (req, res) => {
// 	if (req.user) {
// 		req.session.destroy()
// 		res.clearCookie('connect.sid') // clean up!
// 		return res.json({ msg: 'logging you out' })
// 	} else {
// 		return res.json({ msg: 'no user to log out!' })
// 	}
// })

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect("/")
}

module.exports = router
const passport = require("passport")
const router = require("express").Router()
const userController = require("../controllers/userController")

// SIGNUP
router
.route("/signup")
.post(userController.register)

// LOGIN
router
  .route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    console.log(req.user)
    res.json(req.user)
  })
  .get(function(req, res) {
    console.log(req.user)
    if (req.user) {
      res.json({ username: req.user.username })
    } else {
      res.json(false)
    }
  })

// LOGOUT
router
  .route("/logout")
  .get((req, res) => {
    req.logout()
    res.json(false)
  })


router
  .route("/:id")
  .get(userController.findById)
  .put(userController.updateUser)
  .delete(userController.removeUser)

module.exports = router
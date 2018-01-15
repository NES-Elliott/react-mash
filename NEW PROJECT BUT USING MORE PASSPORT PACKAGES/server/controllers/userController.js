const db = require("../models")

module.exports = {
  // FIND ALL USERS
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // FIND USER BY ID
  findById: function(req, res) {
    db.User
      .findOne(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // CREATE USER
  createUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // UPDATE USER
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  // DELETE USER
  removeUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  register: function(req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err) {
      if (err) {
        console.log("error while user resister!", err)
        return next(err)
      }
      console.log("user registered")
      res.json("it worked")
    })
  }
}
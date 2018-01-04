const db = require("../models");

module.exports = {
  // CREATE USER
  createUser: function(result, res) {
    db.User
      .create(result)
      .catch(function(err) {
        res.json(err);
      });
  },
  // FIND ALL USERS
  findAll: function(req, res) {
    db.User
      .find({})
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  // FIND USER BY ID
  findByID: function(req, res) {
    db.User
      .findOne({
        _id: req.params.id
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  // UPDATE USER
  // DELETE USER
};
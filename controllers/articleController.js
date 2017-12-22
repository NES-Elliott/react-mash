const db = require("../models");

module.exports = {
  createArticle: function(result, res) {
    db.Articles
      .create(result)
      .then(function(dbArticle) {
        res.send("Scrape Complete");
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  findAll: function(req, res) {
    db.Articles
      .find({})
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  findByID: function(req, res) {
    db.Articles
      .findOne({
        _id: req.params.id
      })
      .then(function(dbArticle) {
        console.log(dbArticle);
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};
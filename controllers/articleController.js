const db = require("../models");

module.exports = {
  createArticle: function(result, res) {
    db.Articles
      .create(result)
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
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  findBySource: function(req, res) {
    db.Articles
      .find({
        source: req.params.source
      })
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  removeAllArticles: function(req, res) {
    db.Articles
      .remove({})
      .catch(function(err) {
        console.log(err);
      })
  }
};

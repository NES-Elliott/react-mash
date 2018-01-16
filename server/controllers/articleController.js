const db = require("../models")

module.exports = {
  createArticle: function(result, res) {
    console.log(result)
    db.Article
      .create(result)
      .catch(function(err) {
        res.json(err)
      })
  },
  findAll: function(req, res) {
    db.Article
      .find({})
      .then(function(dbArticle) {
        res.json(dbArticle)
      })
      .catch(function(err) {
        res.json(err)
      })
  },
  findByID: function(req, res) {
    db.Article
      .findOne({
        _id: req.params.id
      })
      .then(function(dbArticle) {
        res.json(dbArticle)
      })
      .catch(function(err) {
        res.json(err)
      })
  },
  findBySource: function(req, res) {
    db.Article
      .find({
        source: req.params.source
      })
      .then(function(dbArticle) {
        res.json(dbArticle)
      })
      .catch(function(err) {
        res.json(err)
      })
  },
  removeAllArticles: function(req, res) {
    db.Article
      .remove({})
      .catch(function(err) {
        console.log(err)
      })
  },
  removeBySource: function(req, res) {
    db.Article
      .find({ source: req.params.source })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err))
  }
}

module.exports = function(app, axios, cheerio, db) {
  app.get("/", function(req, res) {
    axios.get("https://kotaku.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $(".postlist__item").each(function(i, element) {
        var result = {};
        result.articleTitle = $(this)
          .children("header")
          .children(".headline")
          .children("a")
          .text();
        result.articleSummary = $(this)
          .children(".item__content")
          .children(".excerpt")
          .children("p")
          .text();
        result.articleLink = $(this)
          .children("header")
          .children(".headline")
          .children("a")
          .attr("href");
        result.articleAuthor = $(this)
          .children("header")
          .children(".meta--pe")
          .children(".author")
          .children("a")
          .text();
        result.authorLink = $(this)
          .children("header")
          .children(".meta--pe")
          .children(".author")
          .children("a")
          .attr("href");
        db.Articles
          .create(result)
          .then(function(dbArticle) {
            res.send("Scrape Complete");
          })
          .catch(function(err) {
            res.json(err);
          });
      });
    });
  });

  app.get("/articles", function(req, res) {
    db.Articles
    .find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.get("/articles/:id", function(req, res) {
    db.Articles
    .findOne({
      _id: req.params.id
    })
    .populate("comments")
    .then(function(dbArticle) {
      console.log(dbArticle);
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post("/articles/:id", function(req, res) {
    db.Comments
    .create(req.body)
    .then(function(dbComments) {
      return db.Articles.findOneAndUpdate({ _id: req.params.id }, { comments: dbComments._id }, { new: true });
    })
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
  });
}
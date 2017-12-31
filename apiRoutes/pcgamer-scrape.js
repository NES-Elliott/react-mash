// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // SCRAPPER
  app.get("/scrape", function(req, res) {
    axios.get("http://pcgamer.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $("div .listingResult").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("a")
          .children("article")
          .children(".content")
          .children("header")
          .children(".article-name")
          .text();
        result.author = $(this)
          .children("a")
          .children("article")
          .children(".content")
          .children("header")
          .children(".byline")
          .children(".by-author")
          .children("span")
          .text();
        result.source = "pcgamer";
        result.link = $(this)
          .children("a")
          .attr("href");
        result.image = $(this)
          .children("a")
          .children("article")
          .children(".image")
          .children("figure")
          .children("img")
          .attr("srcset");
        result.timePublished = $(this)
          .children("a")
          .children("article")
          .children(".content")
          .children("header")
          .children(".byline")
          .children(".published-date")
          .attr("datetime");
        articleController.createArticle(result, res);
      });
    });
  });

  // FIND METHODS
  app.get("/articles", articleController.findAll);
  app.get("/articles/:id", articleController.findByID);
  app.get("/:source", articleController.findBySource);
}

// listingResult div
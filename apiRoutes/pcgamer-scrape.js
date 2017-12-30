// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // SCRAPPER
  app.get("/pcgamer", function(req, res) {
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
        result.source = "PCGamer";
        result.link = $(this)
          .children("a")
          .attr("href");
        result.image = "No picture available."
        result.timePublished = "unknown"
        articleController.createArticle(result, res);
      });
    });
  });

  // FIND METHODS
  app.get("/articles", articleController.findAll);
  app.get("/articles/:id", articleController.findByID);
}

// listingResult div
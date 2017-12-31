// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // SCRAPPER
  app.get("/scrape", function(req, res) {
    axios.get("https://gamespot.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $(".media").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("a")
          .children(".media-body")
          .children(".media-title")
          .text();
        result.source = "gamespot";
        result.link = "https://www.gamespot.com" + $(this)
          .children("a")
          .attr("href");
        result.image = $(this)
          .children("a")
          .children(".media-figure")
          .children(".media-img")
          .children("img")
          .attr("src");
        result.timePublished = $(this)
          .children("a")
          .children(".media-body")
          .children(".media-meta")
          .children(".media-date")
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
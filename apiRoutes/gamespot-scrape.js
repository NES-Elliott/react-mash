// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // SCRAPPER
  app.get("/gamespot", function(req, res) {
    axios.get("https://gamespot.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $(".media").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("a")
          .children(".media-body")
          .children(".media-title")
          .text();
        result.author = "No author."
        result.source = "Gamespot";
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
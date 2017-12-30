// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // SCRAPPER
  app.get("/polygon", function(req, res) {
    axios.get("https://polygon.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $("div .c-entry-box--compact").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("div")
          .children("h2")
          .children("a")
          .text();
        result.author = $(this)
          .children("div")
          .children("div")
          .children("span")
          .children("a")
          .text();
        result.source = "Polygon";
        result.link = $(this)
        .children("div")
        .children("h2")
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
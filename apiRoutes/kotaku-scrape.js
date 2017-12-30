// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // SCRAPPER
  app.get("/kotaku", function(req, res) {
    axios.get("https://kotaku.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $("div .post-wrapper").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("article")
          .children("header")
          .children(".headline")
          .children("a")
          .text();
        result.author = $(this)
          .children("article")
          .children("header")
          .children(".meta--pe")
          .children(".author")
          .text();
        result.source = "Kotaku";
        result.link = $(this)
          .children("article")
          .children("header")
          .children(".headline")
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
// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");

module.exports = function(app, axios, cheerio, db) {
  // INITIAL SCRAPE
  app.get("/", function(req, res) {
    axios.get("https://kotaku.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $(".postlist__item").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("header")
          .children(".headline")
          .children("a")
          .text();
        result.author = $(this)
          .children("header")
          .children(".meta--pe")
          .children(".author")
          .children("a")
          .text();
        result.source = "Kotaku";
        result.link = $(this)
          .children("header")
          .children(".headline")
          .children("a")
          .attr("href");
        result.image = "No picture available."
        result.timePublished = "unknown"
        // result.authorLink = $(this)
        //   .children("header")
        //   .children(".meta--pe")
        //   .children(".author")
        //   .children("a")
        //   .attr("href");
        articleController.createArticle(result, res);
      });
    });
  });

  // FIND METHODS
  app.get("/articles", articleController.findAll);
  app.get("/articles/:id", articleController.findByID);
}
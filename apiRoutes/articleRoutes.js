// ARTICLE CONTROLLER
const articleController = require("../controllers/articleController");
const gamespotRoute = require("../apiRoutes/gamespot-scrape");
const kotakuRoute = require("../apiRoutes/kotaku-scrape");
const pcgamerRoute = require("../apiRoutes/pcgamer-scrape");
const polygonRoute = require("../apiRoutes/polygon-scrape");


module.exports = function(app, axios, cheerio, db) {
  // SCRAPER
  app.get("/api/scrape", function(req, res) {
    articleController.removeAllArticles()
    gamespotRoute.scrape(axios, cheerio, res);
    kotakuRoute.scrape(axios, cheerio, res);
    pcgamerRoute.scrape(axios, cheerio, res);
    polygonRoute.scrape(axios, cheerio, res);
    res.send("Scrape Complete");
  })

  // FIND METHODS
  app.get("/api/articles", articleController.findAll);
  app.get("/api/articles/:id", articleController.findByID);
  app.get("/api/:source", articleController.findBySource);

  // REMOVE METHODS
  app.get("/api/removearticles", articleController.removeAllArticles);
};

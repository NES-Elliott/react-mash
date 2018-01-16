// ARTICLE CONTROLLER & PACKAGES
const articleController = require("../../controllers/articleController");
const express = require("express");
const router = new express.Router()

// SCRAPERS
const gamespotRoute = require("./gamespot-scrape");
const kotakuRoute = require("./kotaku-scrape");
const pcgamerRoute = require("./pcgamer-scrape");
const polygonRoute = require("./polygon-scrape");

// SCRAPE
router.get("/scrape", (req, res) => {
  articleController.removeAllArticles()
  gamespotRoute.scrape(require("axios"), require("cheerio"), res, articleController);
  kotakuRoute.scrape(require("axios"), require("cheerio"), res, articleController);
  pcgamerRoute.scrape(require("axios"), require("cheerio"), res, articleController);
  polygonRoute.scrape(require("axios"), require("cheerio"), res, articleController);
  res.send("Scrape Complete");
})

// FIND METHODS
router.get("/", articleController.findAll)
router.get("/:id", articleController.findByID)
router.get("/:source", articleController.findBySource)
router.delete("/removearticles", articleController.removeAllArticles)
router.delete("/remove/:source", articleController.removeBySource)

module.exports = router;

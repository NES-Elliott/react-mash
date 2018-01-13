// ARTICLE CONTROLLER & PACKAGES
const articleController = require("../../controllers/articleController");
const db = require("../../models");
const express = require("express");
const router = express.Router()
const axios = require("axios");
const cheerio = require("cheerio");

// SCRAPERS
const gamespotRoute = require("./gamespot-scrape");
const kotakuRoute = require("./kotaku-scrape");
const pcgamerRoute = require("./pcgamer-scrape");
const polygonRoute = require("./polygon-scrape");

// SCRAPE
router.get("/scrape", function(req, res) {
  articleController.removeAllArticles()
  gamespotRoute.scrape(axios, cheerio, res, articleController);
  kotakuRoute.scrape(axios, cheerio, res, articleController);
  pcgamerRoute.scrape(axios, cheerio, res, articleController);
  polygonRoute.scrape(axios, cheerio, res, articleController);
  res.send("Scrape Complete");
})

// FIND METHODS
router.get("/", articleController.findAll)
router.get("/:id", articleController.findByID)
router.get("/:source", articleController.findBySource)
router.delete("/removearticles", articleController.removeAllArticles)
router.delete("/remove/:source", articleController.removeBySource)

module.exports = router;

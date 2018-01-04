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
router.get("/articles", articleController.findAll);
router.get("/articles/:id", articleController.findByID);
router.get("/:source", articleController.findBySource);

// REMOVE METHODS
router.get("/removearticles", articleController.removeAllArticles);

module.exports = router;

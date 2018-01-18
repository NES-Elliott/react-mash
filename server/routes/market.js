const router = require("express").Router()
const marketController = require("../controllers/marketController")

router
  .route("/listing/new")
  .post(marketController.createNewListing)

router
  .route("/")
  .get(marketController.findAllListings)

router
  .route("/:id")
  .get(marketController.findListingById)
  .delete(marketController.removeListing)

module.exports = router
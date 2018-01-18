import axios from "axios";

export default {
  // Get all articles
  getArticles: function() {
    return axios.get("/articles");
  },
  // Get article by id
  getArticleById: function(id) {
    return axios.get("/articles/" + id);
  },
  // Get article by source
  getArticlesBySource: function(source) {
    return axios.get("/articles/source/" + source);
  },
  // Scrape new articles
  scrapeNewArticles: function() {
    return axios.get("/articles/scrape/new")
  },
  // Get user data
  getUser: function(id) {
    return axios.get("/auth/" + id)
  },
  // Update user data
  saveToUser: function(id, newData) {
    return axios.put("/auth/" + id, newData)
  },
  // Get all listings
  getListings: function() {
    return axios.get("/market")
  },
  // Get listing by id
  getListingById: function(id) {
    return axios.get("/market/" + id)
  },
  // Create a new listing
  createNewListing: function(newListing) {
    return axios.post("/market/listing/new", newListing)
  }
};

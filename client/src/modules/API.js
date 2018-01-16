import axios from "axios";

export default {
  // Gets all articles
  scrapeNewArticles: function() {
    return axios.get("/articles/scrape")
  },
  getArticles: function() {
    return axios.get("http://localhost:3000/articles");
  },
  // Gets article by id
  getArticleById: function(id) {
    return axios.get("http://localhost:3000/articles/" + id);
  },
  // Get article by source
  getArticlesBySource: function(source) {
    return axios.get("http://localhost:3000/articles/" + source);
  },
  getUser: function(id) {
    return axios.get("/auth/" + id)
  },
  saveToUser: function(id) {
    return axios.put("/auth/" + id)
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};

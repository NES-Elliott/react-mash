import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("http://localhost:3000/articleapi/");
  },
  // Gets article by id
  getArticleById: function(id) {
    return axios.get("http://localhost:3000/articleapi/" + id);
  },
  // Get article by source
  getArticlesBySource: function(source) {
    return axios.get("http://localhost:3000/articleapi/" + source);
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

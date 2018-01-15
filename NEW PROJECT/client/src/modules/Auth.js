import axios from "axios";

export default {
  // Login
  loginUser: function(verify) {
    return axios.post("/auth/login", verify)
  },
  // Signup
  signupUser: function(userData) {
    return axios.post("http://localhost:3000/auth/signup/", userData)
    .then(response => {
      console.log(response)
    })
  },
  // Logout
  logoutUser: function(source) {
    return axios.get("http://localhost:3000/api/articles/" + source);
  }
};

import axios from "axios";

export default {
  // Login
  loginUser: function(verify) {
    return axios.post("/auth/login", verify)
  },
  // Check if user is logged in
  loginCheck: function() {
    return axios.get("/auth/login")
  },
  // Signup
  signupUser: function(userData) {
    return axios.post("/auth/signup/", userData)
    .then(response => {
      console.log(response)
    })
  },
  // Logout
  logoutUser: function() {
    return axios.get("/auth/logout/");
  }
};

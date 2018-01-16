const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

mongoose.promise = Promise

const userSchema = new Schema({
  local: {
    username: String,
    password: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  }
})

userSchema.methods = {
  generateHash: function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
  },
  validPassword: function(password) {
    return bcrypt.compareSync(password, this.local.password)
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User

// userSchema.pre('save', function(next) {
// 	if (!this.local.password) {
// 		console.log('=======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		this.local.password = this.hashPassword(this.local.password)
// 		next()
// 	}
// })

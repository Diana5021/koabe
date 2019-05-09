const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Webshop',{ useNewUrlParser: true })

const userItemSchema = new mongoose.Schema({
  username: String,
  phone: Number,
  pwd: String
})


let Users = mongoose.model('user',userItemSchema)

const checkAlready = (option) => {
  return Users.find(option)
}

const register = (params) => {
  return Users.insertMany(params)
}

module.exports = { 
  register,
  checkAlready
}
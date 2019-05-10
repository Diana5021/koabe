const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Webshop',{ useNewUrlParser: true })

const userItemSchema = new mongoose.Schema({
  img: String,
  name: String
})


let Carousels = mongoose.model('carousel',userItemSchema)

const getAll = () => {
  return Carousels.find({})
}

const change = async (params) => {
  await Carousels.deleteMany({})
  return Carousels.insertMany(params)
} 



module.exports = { 
  getAll,
  change
}
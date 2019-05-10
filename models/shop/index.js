const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Webshop',{ useNewUrlParser: true })

const shopItemSchema = new mongoose.Schema({
  name: String,
  info: String,
  type: String,
  price: String,
  carousel: Array,
  totalNum: Number
})

let Items = mongoose.model('shop',shopItemSchema)

const getshopItems = ({ name, type }) => {
  let query = name ? {
    name: new RegExp(name, 'g')
  } : {}
  let query2 = type ? {
    type: new RegExp(type, 'g')
  } : {}
  return Items.find(query).find(query2)
          .then(res => (res))     
}


module.exports = {
  getshopItems
}

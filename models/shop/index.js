const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Webshop',{ useNewUrlParser: true })

const shopItemSchema = new mongoose.Schema({
  name: String,
  info: String,
  type: Number,
  price: Number,
  image: Array,
  number: Number,
  time: Number
})

let Items = mongoose.model('shop',shopItemSchema)

const getAll = async () => {
  return Items.find()
}

const getshopItems =  async ({ pageNum, pageSize }) => {
  // let query = !!name ? {
  //   name: new RegExp(name, 'g')
  // } : {}
  // let query2 = !!type ? {
  //   type: new RegExp(type, 'g')
  // } : {}
  let total = Math.ceil((await getAll()).length / pageSize)
  return Items.find()
          .limit(pageSize)
          .skip((pageNum-1) * pageSize)
          .then(res => ({
            res,
            total
          }))     
}

const addShop = async (params) => {
  // await Items.deleteMany({})
  return Items.insertMany(params)
}

const getOne = (params) => {
  return Items.find({_id: params})
}

module.exports = {
  getshopItems,
  addShop,
  getOne
}

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Webshop',{ useNewUrlParser: true })

const shopItemSchema = new mongoose.Schema({
  GoodsName: String,
  Picture: Array,
  GoodsType: Number,
  UnitPrice: Number,
  SellNum: Number,
  StoreNum: Number,
  Description: String,
  PublishTime: Number 
})

let Items = mongoose.model('shop',shopItemSchema)

const getAll = async () => {
  return Items.find()
}

const getshopItems =  async ({ pageNum, pageSize }) => {
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
  return Items.insertMany(params)
}

const getOne = (params) => {
  return Items.find({_id: params})
}

const getSortshop = (params) => {
  let data
  if(~~params === 10) {
    data = {PublishTime:-1}
  } else {
    data = { SellNum: -1 }
  }
  
  return Items.find().sort(data).limit(~~params)
}

const getCategshop = (params) => {
  return Items.find({GoodsType: ~~params})
}

const getKeyshop = (params) => {
  let query = { Description: new RegExp(params, 'g') }
  return Items.find(query)
}

module.exports = {
  getshopItems,
  addShop,
  getOne,
  getSortshop,
  getCategshop,
  getKeyshop
}

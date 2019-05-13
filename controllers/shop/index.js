const shopModel = require('../../models/shop/')

const getShopItems = async ( ctx, next ) => {
  let {num, name, type} = ctx.request.query
  let pageNum = !!num ? ~~num : 1
  let pageSize = 2
  let data = {pageNum,pageSize,name, type}
  try {
    ctx.res.responseData = await shopModel.getshopItems(data)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}

const setShopItem = async ( ctx, next ) => {
  let data = [
    {
      carousel: [{
        id: 1,
        img: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/22294/10/8497/209988/5c76497dE847b1526/6c1feb97879b752c.jpg!q70.dpg.webp'
      }],
      name: 'aaa',
      info: 'aaa',
      type: 'aaa',
      price: 'aaa',
      totalNum: 20
    },
    {
      carousel: [{
        id: 1,
        img: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/22294/10/8497/209988/5c76497dE847b1526/6c1feb97879b752c.jpg!q70.dpg.webp'
      }],
      name: 'aaa',
      info: 'bbb',
      type: 'bbb',
      price: 'aaa',
      totalNum: 20
    },
    {
      carousel: [{
        id: 1,
        img: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/22294/10/8497/209988/5c76497dE847b1526/6c1feb97879b752c.jpg!q70.dpg.webp'
      }],
      name: 'bbb',
      info: 'bbb',
      type: 'bbb',
      price: 'bbb',
      totalNum: 20
    },
    {
      carousel: [{
        id: 1,
        img: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/22294/10/8497/209988/5c76497dE847b1526/6c1feb97879b752c.jpg!q70.dpg.webp'
      }],
      name: 'ccc',
      info: 'ccc',
      type: 'ccc',
      price: 'ccc',
      totalNum: 20
    },
    {
      carousel: [{
        id: 1,
        img: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/22294/10/8497/209988/5c76497dE847b1526/6c1feb97879b752c.jpg!q70.dpg.webp'
      }],
      name: 'ddd',
      info: 'ddd',
      type: 'ddd',
      price: 'ddd',
      totalNum: 20
    },

  ]

  try {
    await shopModel.addShop(data)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}  

const getOneItem = async (ctx, next) => {
  let { id } = ctx.request.query
  try {
    ctx.res.responseData = await shopModel.getOne(id)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}



module.exports = {
  getShopItems,
  setShopItem,
  getOneItem
}
const shopModel = require('../../models/shop/')

const getshopItems = async ( ctx, next ) => {
  try {
    let data = await shopModel.getshopItems({ })
    ctx.res.responseData = data.items
    await next()
  } catch (e) {
    await next()
  }
}



module.exports = {
  getshopItems,
}
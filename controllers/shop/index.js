const shopModel = require('../../models/shop/')

const getshopItems = async ( ctx, next ) => {
  try {
    let data = await shopModel.getshopItems({ })
    ctx.res.responseData = data
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}



module.exports = {
  getshopItems,
}
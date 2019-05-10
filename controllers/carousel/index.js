const CarouselModel = require('../../models/carousel/')


const getImg = async (ctx, next) => {
  try {
    ctx.res.responseData = await CarouselModel.getAll()
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}

const setImg = async (ctx, next) => {
  try {
    await CarouselModel.change(ctx.request.body)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}
module.exports = {
  getImg,
  setImg
}
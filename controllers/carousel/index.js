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
  let data = [
    {
      "name": "第一张图片",
      "id": "785855",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23694/9/13580/93775/5ca1b97cEe28c4f0f/5a27b96c74e7169b.jpg!cr_1125x549_0_72!q70.jpg.dpg"   
    },
    {
      "name": "第二张图片",
      "id": "785834",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/17564/21/13543/135023/5ca08291E6af6cfb0/e796a7e24b21e4a6.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }, 
    {
      "name": "第三张图片",
      "id": "786082",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/21259/14/13643/134527/5ca1e6a6Efc658686/019ff9b58aacd8bf.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }, 
    {
      "name": "第四张图片",
      "id": "778816",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t27580/291/1776357946/120847/f2c402d3/5beaf870Ne3bce5d9.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }, 
    {
      "name": "第五张图片",
      "id": "801048",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31788/9/8862/97312/5ca1d2fcEc9c82036/bb2367a50483421f.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }, 
    {
      "name": "第六张图片",
      "id": "780819",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23112/33/6431/99212/5c540d7fEf8000223/fddb6b047c02ba3d.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }, 
    {
      "name": "第七张图片",
      "id": "775734",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/24611/40/12877/39114/5c9bbcb2Ef14d1dd6/56bd7190c328967f.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }, 
    {
      "name": "第八张图片",
      "id": "808716",
      "img": "http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/30893/13/8991/78877/5ca2195fE4ac9f5a7/a8062e710a37a09a.jpg!cr_1125x549_0_72!q70.jpg.dpg"
    }
  ]
  try {
    // await CarouselModel.change(ctx.request.body)
    await CarouselModel.change(data)
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
const path=require("path")
const fs = require('fs')
const svgCaptcha = require('svg-captcha')
const jwt = require('jsonwebtoken')
const { Encrypt, Decrypt } = require('../utils/crypto')
const {status} = require('../utils/status')
const uploadUrl="http://10.246.108.34:4000/images"


const response = async (ctx) => {
  if (!ctx.res.state) ctx.res.state = 'error'
  await ctx.render('index', {
    data: JSON.stringify(ctx.res.responseData || {}), 
    status: status[ctx.res.state]
  })
}

const getCode = async (ctx) => {
  let captcha = svgCaptcha.create({    //这种生成的是随机数验证码
    size:4,    //验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 2, // 干扰线条的数量
    height:50,
    color: true,
    background: 'rgba(0,0,0,0.8)'
  })
  let mark = Encrypt(captcha.text.toLowerCase())
  console.log(mark, '')
  // ctx.cookies.set('mark',mark,{
  //   domain: 'localhost',  // 写cookie所在的域名
  //   path: '/',       // 写cookie所在的路径
  //   maxAge: 10 * 60 * 1000, // cookie有效时长
  //   // expires: new Date('2017-02-15'),  // cookie失效时间
  //   httpOnly: false,  // 是否只用于http请求中获取
  //   overwrite: true  // 是否允许重
  // })
  ctx.cookies.set('mark',mark)
  ctx.body = JSON.stringify({
    img:captcha.data
  })
}

const checkLogin = async (ctx,next) => {
  let token = ctx.request.body.token
  if ( !token ) {
    ctx.res.state = 'not login'
    await next()
    return 
  }
  try {
    token = Decrypt(token)
    let tokenInfo = jwt.verify(token, 'i love u')
    let now = (Date.now() / 1000) - tokenInfo.iat
    let expires = 60 * 60 * 2 // 2个小时过期时间
    if ( now > expires ) {
      ctx.res.state = 'not login'
      await next()
      return
    }
    ctx.res.responseData = tokenInfo
    ctx.res.state = 'success'
    await next()
    return
  } catch (e) {
    ctx.res.state = 'not login'
    await next()
  }

}

const uploadImg = async (ctx,next) => {
  const file = ctx.request.files.file
  const reader=fs.createReadStream(file.path)
  let filePath=path.resolve(__dirname,"../public/images/")
  file.name = Date.now() + file.name
  let fileResource=filePath+`/${file.name}`
  if(!fs.existsSync(filePath)) {
    fs.mkdirSync("./public/")
    fs.mkdirSync("./public/images/")
  }
  let upstream=fs.createWriteStream(fileResource)
  reader.pipe(upstream)
  ctx.res.responseData = { url:uploadUrl+`/${file.name}` }
  ctx.res.state = 'success'
  await next() 
}

const deleteImg = async (ctx, next) => {
  let { img } = ctx.request.query
  try {
    fs.unlinkSync(`./static/upload/${img}`)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
} 

module.exports = {
  response,
  getCode,
  checkLogin,
  uploadImg,
  deleteImg
}
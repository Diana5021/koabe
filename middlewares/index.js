const svgCaptcha = require('svg-captcha')
const jwt = require('jsonwebtoken')
const { Encrypt, Decrypt } = require('../utils/crypto')
const {status} = require('../utils/status')


const response = async (ctx) => {
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
  ctx.cookies.set('mark',mark,{
    domain: 'localhost',  // 写cookie所在的域名
    path: '/',       // 写cookie所在的路径
    maxAge: 10 * 60 * 1000, // cookie有效时长
    // expires: new Date('2017-02-15'),  // cookie失效时间
    httpOnly: false,  // 是否只用于http请求中获取
    overwrite: true  // 是否允许重
  })
  ctx.body = JSON.stringify({
    img:captcha.data
  })
}

const checkLogin = async (ctx,next) => {
  let token = ctx.request.body.token
  if ( !token ) {
    ctx.res.state = 'not login'
    await next()
    // await ctx.render('index', {
    //   data: JSON.stringify({}), 
    //   status: status['not login']
    // })
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
      // await ctx.render('index', {
      //   data: JSON.stringify({}), 
      //   status: status['not login']
      // })
      return
    }
    ctx.res.responseData = tokenInfo
    ctx.res.state = 'success'
    await next()
    return
  } catch (e) {
    ctx.res.state = 'not login'
    await next()
    // await ctx.render('index', {
    //   data: JSON.stringify({}), 
    //   status: status['not login']
    // })
  }

}
module.exports = {
  response,
  getCode,
  checkLogin
}
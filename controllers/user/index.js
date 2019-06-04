const jwt = require('jsonwebtoken')
const UserModel = require('../../models/user/')
const { Encrypt, Decrypt } = require('../../utils/crypto')

const userReg = async (ctx,next) => {
  let { username, phone } = ctx.request.body
  if(! /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phone)) {
    ctx.res.state = 'unreal phone'
    await next()
    return
  }
  let usernamedata = await UserModel.checkAlready({ username })
  if (usernamedata.length) {
    ctx.res.state = 'username exits'
    await next()
    return
  }
  let data = await UserModel.checkAlready({ phone })
  if (data.length) {
    ctx.res.state = 'phone exits'
    await next()
    return
  }
  try {
    await UserModel.register(ctx.request.body)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}

const userLogin = async (ctx,next) => {
  let mark
  try {
    mark = Decrypt(ctx.cookies.get('mark'))
  } catch (e) {
    ctx.res.state = 'fail login'
    // console.log('tag', '')
    await next()
    return
  }
  // let mark = Decrypt(ctx.cookies.get('mark'))
  // if(!!mark) {
  //   ctx.res.state = 'fail login'
  //   await next()
  //   return
  // }
  let { user, pwd, code } = ctx.request.body
  let usernamedata = await UserModel.checkAlready({ username: user })
  let userdata = isNaN(user*1) ? 
    usernamedata 
    :
    (usernamedata.length > 0 ? usernamedata : await UserModel.checkAlready({ phone: user }))
  if(!userdata.length) {
    ctx.res.state = 'user error'
    await next()
    return
  } 
  if(userdata[0].pwd !== pwd) {
    ctx.res.state = 'user error'
    await next()
    return
  }
  if(code.toLowerCase() !== mark) {
    ctx.res.state = 'code error'
    await next()
    return
  }

  let token = jwt.sign({
    uid: userdata[0]._id,
    username: userdata[0].username,
  }, 'i love u')
  ctx.res.responseData = { 
    token: Encrypt(token),
  }
  ctx.res.state = 'success'
  await next()
  
}

const check = async (ctx,next) => {
  if(!!ctx.res.responseData) {
    let userinfo = await UserModel.checkAlready({
      _id: ctx.res.responseData.uid
    })
    let item = Object.assign({}, userinfo[0]._doc)
    delete item.pwd
    ctx.res.responseData = item
  }
  await next()
}

module.exports = {
  userReg,
  userLogin,
  check
}
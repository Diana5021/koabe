const status = {
  'success': {
    code: '200',
    msg: 'request is success'
  },
  'error': {
    code: '500',
    msg: 'request is error from server'
  },
  'phone exits': {
    code: '204',
    msg: '手机号已注册'
  },
  'username exits': {
    code: '204',
    msg: '用户名已注册'
  },
  'unreal phone': {
    code: '204',
    msg: '请输入正确的手机号'
  },
  'user error': {
    code: '204',
    msg: '用户不存在'
  },
  'fail login': {
    code: '204',
    msg: '登录失败'
  },
  'code error': {
    code: '204',
    msg: '请填写正确的验证码'
  },
  'not login': {
    code: '103',
    msg: '没有登录'
  }
}

module.exports = {
  status
}
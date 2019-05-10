const router = require('koa-router')()

const baseUrl = require('../config')
const { response, getCode, checkLogin } = require('../middlewares/')
const usersController = require('../controllers/user/')

const { Encrypt, Decrypt } = require('../utils/crypto')

router.prefix(baseUrl + '/users')

router.post('/login', usersController.userLogin,response)

router.post('/register', usersController.userReg,response)

router.post('/author', checkLogin, usersController.check, response)

router.get('/code', getCode)

module.exports = router

const router = require('koa-router')()

const baseUrl = require('../config') 

const { response, uploadImg, deleteImg } = require('../middlewares') 

router.prefix(baseUrl + '/file')

router.post('/', uploadImg, response)

router.get('/removeimg', deleteImg, response)

module.exports = router

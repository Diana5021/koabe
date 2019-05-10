const router = require('koa-router')()

const baseUrl = require('../config')

const { response } = require('../middlewares/')
const { getImg, setImg } = require('../controllers/carousel/')

router.prefix(baseUrl + '/imgs')

router.get('/', getImg, response)

router.put('/', setImg, response)

module.exports = router
const router = require('koa-router')()

const baseUrl = require('../config') 

const { response } = require('../middlewares') 

const shopController = require('../controllers/shop/')

router.prefix(baseUrl)

router.get('/', shopController.getshopItems, response)
module.exports = router

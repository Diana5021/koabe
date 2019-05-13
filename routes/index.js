const router = require('koa-router')()

const baseUrl = require('../config') 

const { response } = require('../middlewares') 

const shopController = require('../controllers/shop/')

router.prefix(baseUrl)

router.get('/', shopController.getShopItems, response)

router.get('/item', shopController.getOneItem, response)


router.post('/', shopController.setShopItem, response)

module.exports = router

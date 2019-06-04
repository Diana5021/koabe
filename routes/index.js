const router = require('koa-router')()

const baseUrl = require('../config') 

const { response } = require('../middlewares') 

const shopController = require('../controllers/shop/')

router.prefix(baseUrl)

router.get('/', shopController.getShopItems, response)

// router.post('/', shopController.postShopItems, response)

router.get('/item', shopController.getOneItem, response)

router.get('/getsort', shopController.getSortItem, response)


router.post('/addshop', shopController.setShopItem, response)


module.exports = router

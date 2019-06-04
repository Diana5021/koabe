const shopModel = require('../../models/shop/')

const getShopItems = async ( ctx, next ) => {
  let {num, pageSize} = ctx.request.query
  let pageNum = !!num ? ~~num : 1
  pageSize = !!pageSize ? ~~pageSize : 5
  let data = {pageNum,pageSize}
  try {
    ctx.res.responseData = await shopModel.getshopItems(data)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}

const getSortItem = async ( ctx, next ) => {
  let { limit } = ctx.request.query
  try {
    ctx.res.responseData = await shopModel.getSortshop(limit)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}


const setShopItem = async ( ctx, next ) => {
  let data = ctx.request.body
  try {
    await shopModel.addShop(data)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}  

const getOneItem = async (ctx, next) => {
  let { id } = ctx.request.query
  try {
    ctx.res.responseData = await shopModel.getOne(id)
    ctx.res.state = 'success'
  } catch (e) {
    ctx.res.state = 'error'
  }
  await next()
}



module.exports = {
  getShopItems,
  setShopItem,
  getOneItem,
  getSortItem
}

// let data = [
//   {
//     GoodsName: '垃圾袋',
//     GoodsType: 1,
//     UnitPrice: 10,
//     StoreNum: 50,
//     SellNum: 10,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/66874/13/737/86985/5cef7014E50521fa1/c864b7446644484d.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/18850/19/14260/106234/5ca59c71E9174541a/e461b33669f7c122.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/18387/3/14298/66904/5ca59c71E1573fe22/13fb5d6825afd283.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/11283/17/15122/100033/5ca59c71E28b4cb16/f1ce10e041225fc8.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/17855/17/14257/53496/5ca59c72E8adcd9d0/9f3f54ac04f704a5.jpg!q70.dpg.webp'
//       }  
//     ],
//     Description: '5卷装 全新料垃圾袋加厚点断式一次性家用中号厨房塑料袋卷装 100只平口垃圾袋颜色随机',
//     PublishTime: 1559623766785
//   },
//   {
//     GoodsName: '脸盆',
//     GoodsType: 1,
//     UnitPrice: 8.1,
//     StoreNum: 80,
//     SellNum: 20,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/3129/33/9842/137315/5bc944d5E3cc1a761/c10bc8d0320378cb.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/1114/5/15843/224900/5be00f6fE7da6ca42/c62feebe1ecdaf6e.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/9955/29/154/247441/5bc944d6Ea3311870/ff3959417f62befe.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/7820/27/159/238654/5bc944d7E0b4d110e/55aa350b9d8e0894.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/6436/9/514/121377/5bc944d8E6eb3546d/e7e431b5988b7ab9.jpg!q70.dpg.webp'
//       }  
//     ],
//     Description: '佳佰 36cm脸盆加深加厚防滑塑料洗澡洗漱盆脸盆洗脚盆洗衣盆洗菜盆',
//     PublishTime: 1559623766795
//   },
//   {
//     GoodsName: '刷子',
//     GoodsType: 1,
//     UnitPrice: 4.9,
//     StoreNum: 80,
//     SellNum: 15,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t24148/167/2478210591/162082/a5cc5270/5b835bd4Neb93be4b.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t23851/264/2483793206/261092/a914352a/5b835bd2Nfe19978c.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t22732/174/2505967966/218642/e12eb80/5b835bd3Ncfead01c.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t23680/131/2473608932/309164/445efd7e/5b835bd3N4b9eaae7.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '秉优 塑料小刷子鞋子清洁刷 软毛洗鞋刷洗衣刷洗衣服板刷鞋刷子',
//     PublishTime: 1559623766695
//   },
//   {
//     GoodsName: '刷子',
//     GoodsType: 1,
//     UnitPrice: 11.9,
//     StoreNum: 60,
//     SellNum: 15,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/25814/5/10060/343009/5c837273Ee83ae115/2e1abb2f657a8b07.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/24643/32/10039/185619/5c837274E8e847701/7f015270b0768839.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3172/305/2394752257/84440/a314b080/57e0a8c0N2b26bc02.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3166/33/2378342541/203160/b702b209/57e0a8b1Na31fd136.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3262/53/2361635364/200549/a3280b48/57e0a8b8N655c1b87.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0006,
//         name: '0006',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3157/195/2342985130/96158/4d9fcc4b/57e0a8c6Nfe1db0bd.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '茶花 刷子 连体鞋刷 洗衣刷 4406',
//     PublishTime: 1559623766685
//   },
//   {
//     GoodsName: '刷子',
//     GoodsType: 1,
//     UnitPrice: 11.9,
//     StoreNum: 60,
//     SellNum: 15,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/25814/5/10060/343009/5c837273Ee83ae115/2e1abb2f657a8b07.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/24643/32/10039/185619/5c837274E8e847701/7f015270b0768839.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3172/305/2394752257/84440/a314b080/57e0a8c0N2b26bc02.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3166/33/2378342541/203160/b702b209/57e0a8b1Na31fd136.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3262/53/2361635364/200549/a3280b48/57e0a8b8N655c1b87.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0006,
//         name: '0006',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3157/195/2342985130/96158/4d9fcc4b/57e0a8c6Nfe1db0bd.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '茶花 刷子 连体鞋刷 洗衣刷 4406',
//     PublishTime: 1559623766695
//   },
//   {
//     GoodsName: '牙刷',
//     GoodsType: 1,
//     UnitPrice: 15.9,
//     StoreNum: 60,
//     SellNum: 15,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t30574/356/1055991806/382956/95ca89d2/5c063f21Nf361dd47.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/19533/6/10586/314109/5c8774bdE85f1dc72/6eab65af93e9dde1.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/19778/21/10415/363804/5c8774bdEd4abcaf4/4a55c4e1ae59bb56.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t28921/127/1083561343/372316/213b3032/5c063f1aN6fc6d825.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t28540/56/1044237625/211998/58bf5abb/5c063f26N5ad3b276.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '黑人（DARLIE）炭丝深洁软毛成人牙刷*4 备长炭刷毛清洁牙渍（优惠装）（新老包装随机发货）',
//     PublishTime: 1559623762695
//   },
//   {
//     GoodsName: '牙膏',
//     GoodsType: 1,
//     UnitPrice: 9.9,
//     StoreNum: 30,
//     SellNum: 15,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t4438/165/483918176/256663/c7d5b62f/58d0a402Na2b07a9b.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t4249/303/2416102044/225961/35715b01/58d0a408Ne4fb274e.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t4123/291/2369406361/134927/e5de7800/58d0a409Nf59e177e.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3280/212/9071031795/138229/2e649a70/58d0a40dN1168f7fa.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t4366/257/2399738316/173355/6fd46867/58d0a41fN2659b151.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '中华御齿护龈抗敏水漾牡丹味牙膏40g（新老包装随机替换）',
//     PublishTime: 1559623762696
//   },
//   {
//     GoodsName: '洗衣液',
//     GoodsType: 1,
//     UnitPrice: 58.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t5122/173/2438530405/96521/7e60fb0/591ad144Nd56d1bfa.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t5125/214/2428832344/198418/ab18b1cf/591ad145N529f0691.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t5260/262/2427105163/95762/5c977848/591ad145Nfb1ccd59.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t5437/335/2450233667/48559/225a650c/591ad146N1d0cf39b.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t4465/90/2327938894/78994/bd16c278/591ad146N97bc0721.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '卫新 香薰洗衣液（薰衣草） 4.26kg',
//     PublishTime: 1559623762699
//   },
//   {
//     GoodsName: '纸巾',
//     GoodsType: 1,
//     UnitPrice: 56.9,
//     StoreNum: 20,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t18235/135/1090761283/276893/5ec57520/5aba0d30N4e66d26c.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t17407/116/1087823008/349715/441c1284/5aba0d31N1cd3087b.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t18274/46/1059541139/176225/f8bea5dc/5aba0d32N78beed16.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t17974/116/1064649151/93564/6a2b3e0e/5aba0d33Nba9ad08e.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '清风（APP）抽纸 原木纯品金装系列 3层120抽软抽*24包纸巾（整箱销售）（新老包装交替发货）',
//     PublishTime: 1559623762629
//   },
//   {
//     GoodsName: '纸巾',
//     GoodsType: 1,
//     UnitPrice: 44.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t19306/278/1149856346/347966/34491a7c/5abce9e6Ned31ec4a.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/38336/33/6526/237049/5cd1359dEf76117bf/f117343a3b8ed84c.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t17677/178/1258247383/270649/d4f232a0/5ac1f770N9a4900d3.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t18259/284/1227042103/97360/c688d8a3/5ac1f771N78f93334.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t18547/122/1266836743/285531/577ab4ec/5ac1f771N95d4f904.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0006,
//         name: '0006',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t19501/333/1270431588/439846/f7cc5f96/5ac1f76fN56ad181c.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '清风（APP）抽纸 柔韧2层200抽软抽*20包纸巾（新老包装交替发货）（整箱售卖）',
//     PublishTime: 1559623762619
//   },
//   {
//     GoodsName: '奥利奥',
//     GoodsType: 3,
//     UnitPrice: 5.8,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t13093/262/383708502/127031/699eeefe/5a0aa452Ne9fcbf89.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t13078/305/425618095/174589/3d5a4c4c/5a0aa452Nedea559f.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t13519/265/394107091/117353/b7b69613/5a0aa452Nd7522101.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t13864/111/381942307/117353/b7b69613/5a0aa509Nbfbb9c3a.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t18547/122/1266836743/285531/577ab4ec/5ac1f771N95d4f904.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '奥利奥Oreo早餐休闲零食蛋糕糕点夹心饼干轻甜味116g',
//     PublishTime: 1559623762672
//   },
//   {
//     GoodsName: '虾条',
//     GoodsType: 3,
//     UnitPrice: 9.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t6277/218/1823355660/323342/cdbcaddc/59583a1dN16748a8e.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6082/66/3706253999/306367/80efbfbc/59583a25N6eba3fff.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/4141/20/11711/502599/5bd02e13E3b8c55c0/bb3f92052698740c.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t5761/99/4996313057/193939/26eba992/59583a3cNf7182be1.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6712/337/1772921826/183476/e4e8bdff/59583a43N01502e19.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '咪咪 虾条 虾味 怀旧好吃膨化零食大礼包 网红休闲小点心糕点（18g*20包）360g/袋',
//     PublishTime: 1559623762679
//   },
//   {
//     GoodsName: '溜溜梅',
//     GoodsType: 3,
//     UnitPrice: 9.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t27862/218/2529483386/351209/95128045/5c04e468N53661c1f.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t30283/310/1012571103/205660/b394332f/5c04e47fN24e1361d.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t26062/294/2139828983/325439/5ed43763/5bc54179Na84977ea.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3691/343/1871330385/237446/c04e6e88/5833d7acN7110657b.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t26170/241/2591116688/242299/3161cc7f/5c04e491N702e4b06.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '溜溜梅九制梅 十蒸九晒 数月一梅 休闲零食酸话梅干(136g/160g两种包装随机发货)',
//     PublishTime: 1559623762709
//   },
//   {
//     GoodsName: '趣多多',
//     GoodsType: 3,
//     UnitPrice: 5.1,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t25879/8/2318505905/111470/5c942936/5bc7e839N92b021fa.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t14251/111/1672646729/185969/f49bc8b7/5a533f11N30ae1d63.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t25111/102/2279856286/142981/ed8e2413/5bc7e839N24aacd07.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t25297/126/2288960445/149727/77751c67/5bc7e839N943219fd.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '趣多多啊咖啡味香脆曲奇饼干95g(新老包装随机发货)',
//     PublishTime: 1559623762701
//   },
//   {
//     GoodsName: '趣多多',
//     GoodsType: 3,
//     UnitPrice: 12.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t26254/276/1401153407/148422/a3c46141/5bc7e160N3e78237d.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t16093/166/1393220853/431244/35661be0/5a53416bNb2db4334.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t14470/232/1591771195/467004/4ca8a699/5a53416bNaacc6dcf.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t27049/235/1387135091/209088/3de888df/5bc7e161N143cbb25.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t24721/21/2298942102/209978/88b1a96c/5bc7e161N8ca4f1d5.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '趣多多 香脆曲奇饼干 香浓巧克力原味285g (新老包装随机发货)',
//     PublishTime: 1559623762709
//   },
//   {
//     GoodsName: '奥利奥',
//     GoodsType: 3,
//     UnitPrice: 4.2,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t22654/130/2156305304/195895/9a781a10/5b769ac5Nac04a63e.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t12565/261/391778162/345075/223ace16/5a0a90e4N5f730822.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t12886/240/404613810/387809/5a3fdf1e/5a0a90c8Nbc84c5c5.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t11305/296/1729643242/169061/70ba39e2/5a0a90e5N867ec8a1.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '奥利奥（Oreo） 巧脆卷 香草味零食蛋卷威化饼干55g （新老包装随机发货）',
//     PublishTime: 1559623762763
//   },
//   {
//     GoodsName: '锅巴',
//     GoodsType: 3,
//     UnitPrice: 9.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/8579/36/14947/94649/5c6bc6c5E24b43a0f/b2243ea77715f271.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t10186/250/2429258497/476872/569b01a5/59f6bdf3Nf7ce133c.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/29093/29/10387/40016/5c86140cEe131f94f/df8c8d14ebc21c32.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/26286/36/10416/416482/5c861412Ef67dcaf7/a756766041f87035.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/24766/24/10395/504186/5c861419E13b2aa30/5275604aeeb5f178.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '琥珀 小米锅巴（牛肉味25gX20袋）办公室零食大礼包 老式儿时怀旧经典休闲粗粮脆锅巴膨化食品500g',
//     PublishTime: 1559623762763
//   },
//   {
//     GoodsName: '辣条',
//     GoodsType: 3,
//     UnitPrice: 14.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t3262/346/5064317526/215384/6026164d/5860e2a9N09d0478c.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3304/104/4411172387/148118/1fb6da7f/584e5d5eN43a59582.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3835/121/2096639631/238798/ff94782f/584e5d5fN4a5b102b.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t3481/94/2388983505/125431/53773a71/584e5d5fN32c3b506.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/30735/7/13209/194332/5cb98c68Ee984990c/4e3cd2be2a8f848d.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '琥珀 小米锅巴（牛肉味25gX20袋）办公室零食大礼包 老式儿时怀旧经典休闲粗粮脆锅巴膨化食品500g',
//     PublishTime: 1559623762763
//   },
//   {
//     GoodsName: '饼干',
//     GoodsType: 3,
//     UnitPrice: 19.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t21871/219/2471606850/476457/63e63438/5b5804b3Nb7638cf7.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t20077/34/2637369035/478880/8918e934/5b5804b4N2c3d3e84.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t22762/144/1228594138/531342/8830eb4e/5b5804b5N99075e9b.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t21751/245/2502196135/359140/2e7b6707/5b5804b4Ne21c7c99.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t23347/18/1251867199/257010/81cf4ecc/5b5804b5Na255d637.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: 'Tango威化饼干 休闲零食 咔咔脆威化饼干 巧克力味160g/盒',
//     PublishTime: 1559623762763
//   },
//   {
//     GoodsName: '糕点',
//     GoodsType: 3,
//     UnitPrice: 11.8,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/17752/9/8024/378859/5c764936E38584c0d/16aa6c52c3866c67.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/22802/12/8460/500874/5c764944E3333718c/5db1be93b13a6f49.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/9114/38/16137/442151/5c76494aEa3e5acc7/1477405fde38b919.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '耶米熊夹心抹茶味麻薯四川特产小吃糕点160g',
//     PublishTime: 1559623762763
//   },
//   {
//     GoodsName: '饼干',
//     GoodsType: 3,
//     UnitPrice: 14.8,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t6610/91/850826144/240491/1981ec31/59466c7dN797535d6.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6385/157/833522906/185720/69dcddb2/59466c80Nd6124139.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6637/94/855393615/190595/c578a39e/59466c80N5eb7dbef.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6499/114/890039716/95308/3e1442b3/59466c77N32579db5.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6457/277/866924967/169266/a7576e4f/59466c7fN896ae2b6.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0006,
//         name: '0006',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t6073/312/2828210382/172705/250ce531/59466c76Nb31cdb36.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '嘉友 牛乳味饼干468g 早餐休闲零食',
//     PublishTime: 1559623762763
//   },
//   {
//     GoodsName: '方便面',
//     GoodsType: 3,
//     UnitPrice: 19.9,
//     StoreNum: 30,
//     SellNum: 5,
//     Picture: [
//       {
//         id: 0001,
//         name: '0001',
//         url: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/1731/4/2252/345223/5b961c2cE29b051f6/95c5396a76175218.jpg!q80.dpg.webp'
//       },
//       {
//         id: 0002,
//         name: '0002',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/3108/35/2201/414178/5b961c2bE166ce3e0/08ed1e1754676120.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0003,
//         name: '0003',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/2669/40/2262/328899/5b961c2dE0a8ebe5e/afffcb4a5abf8119.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0004,
//         name: '0004',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/341/26/2462/363331/5b961c2eE5c4c746a/51012b226f509bf1.jpg!q70.dpg.webp'
//       },
//       {
//         id: 0005,
//         name: '0005',
//         url: '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/5969/27/2175/332342/5b961c2fE96ffc1cf/b4046a46e0d3c8aa.jpg!q70.dpg.webp'
//       }
//     ],
//     Description: '派力特 休闲零食 老北京方便面 办公室休闲零食干脆面 麻辣味20包1260g',
//     PublishTime: 1559623762763
//   },

// ]

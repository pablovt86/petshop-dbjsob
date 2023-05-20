
const express = require('express')
const router = express.Router();
let productController = require('../controller/productsController')

let app = express();




router.get('/', productController.home)
router.get('/productDetail', productController.detail)
router.get('/carrito', productController.carrito)
router.get('/listado', productController.listProduct)
router.get('/product/search', productController.search)






module.exports = router
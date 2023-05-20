let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController');
let upload = require('../middleware/uploadProduct');
// let validadorAdmin = require("../validation/validadorAdmin")

router.get('/administrador', controller.index);
router.get('/products', controller.products)
router.get('/products/create', controller.create);
router.post('/products/store',upload.single('image'),controller.store);
router.get('/product/search', controller.search)

router.get('/product/edit/:id', controller.edit);
router.put('/product/update/:id',upload.single('image') ,controller.update);
router.delete('/product/delete/:id', controller.delete);


module.exports = router;
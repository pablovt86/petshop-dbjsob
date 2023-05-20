const express = require('express');
const router = express.Router();
let userController = require('../controller/usersController')
let uploadAvatar = require('../middleware/uploadAvatar')
let registerValidator = require('../validation/registerValidator')
let loginValidator = require('../validation/loginValidator')





router.get('/register', userController.register)
router.post('/register',uploadAvatar.single('avatar'), registerValidator,userController.processRegister)

router.get('/login', userController.login)
router.post('/login',loginValidator, userController.processLogin)
router.get('/logout', userController.logout)


router.get('/profile', userController.profile)




module.exports = router
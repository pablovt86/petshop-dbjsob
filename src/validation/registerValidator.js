const { check, body } = require('express-validator');
const { users } = require('../data/dataBase')


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es requerido'),

    check('last_name')
    .notEmpty()
    .withMessage('El apellido es requerido'),
    check('tel')
    .notEmpty()
    .withMessage('el campo no puede estar vacio').isLength({
        min: 10,
        max: 10
    })
    .withMessage('el campo debe tener 10 caracteres'),

    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom((value, {req}) => {
      



       let user = users.find(user=>{ 
            return user.email == value 
        })

        if(user){
            return false
        }else{
            return true
        }
   
    }).withMessage('Email ya registrado'),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')


]
let { check, body } = require('express-validator');
const { users } = require('../data/dataBase')

module.exports =[
    function validadorAdmin(req,res, next){
        

        if( req.session.user !== "undefined" && req.session.user.rol == "ADMIN_USER"){
next()
        }else{
            res.redirect("/")
       
        }
    }
]
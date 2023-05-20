function cookieSession (req, res, next) {
    // pregunto si existe la cookie con el nombre que creé
    if(req.cookies.userPetShop){
        req.session.user = req.cookies.userPetShop;
        res.locals.user = req.session.user
    }
    next()
}

module.exports = cookieSession
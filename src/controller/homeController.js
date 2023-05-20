let controller = {
    index: (req, res) => {
     
        let titulo = "Bienvenidos a Fatiga Pet Shop";
        res.render('home', {titulo,
            session: req.session
        
        });
    }
}

module.exports = controller;
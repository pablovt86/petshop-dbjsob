let {products} = require('../data/dataBase')


let productController = {

    home:(req, res)=>{

        let productsInSale = products.filter(product => product.discount >= 10)
        
        res.render('admin/products/home', {
            sliderTitle: "Novedades",
            sliderProducts: productsInSale,
            title:"home",
            session: req.session
        })
    },
    
      

    
    detail:(req, res)=>{
        res.render('admin/products/productDetail',{title:"productDetail"})

    },
    carrito:(req, res)=>{
        res.render('admin/products/carrito',{title:"carrito"})

    },
    listProduct:(req, res)=>{
        res.render('admin/products/listadoProductos',{title:"carrito"})

    },
    search:function(req,res){
        let search = req.query.searchHome.toLowerCase().trim();
        let resultados = products.filter(product=> product.name.toLowerCase().trim().includes(search))
        // res.send(resultados)
        res.render('admin/products/searchAdmin',{
            resultados,
            title:"resultado de busqueda",
            search
           
        })
        
        }
}

module.exports = productController
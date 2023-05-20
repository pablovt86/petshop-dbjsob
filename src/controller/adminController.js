const {products,categories, writeProductsJson} = require('../data/dataBase')
const fs = require('fs')
let controller = {
index: function(req, res){
    res.render('admin/administrador.ejs', {title:"panel de administracion",
        products
    });
},
products:function(req,res){
res.render('admin/products/adminProducts',{title:"panel de products",
products
})
},
create:function(req,res){
let subcategories = products.map(product=>product.subcategory)

let uniqueSubcategory = subcategories.filter((x, i , a)  => a.indexOf(x) === i)

    res.render('admin/products/product-create-form.ejs',{
        title:"crear productos",
        categories,
        subcategory:uniqueSubcategory
    })
},
store:function(req,res){
    let lastId = 1;
    products.forEach(product => {
        if(product.id > lastId){
            lastId = product.id
        }      
    });

    const { name,description
    ,category
    ,subcategory
    ,discount
    ,price
    ,marca
} = req.body
    
    let newProduct ={
        id: lastId +1,
        name:name.trim(),
        description:description.trim(),
        category:+category,
        subcategory:subcategory,
        discount:+discount,
        price:+price.trim(),
        image:req.file?[req.file.filename]:["defaut-image.png"],
        marca:marca.trim()

    }

    // let newProduct ={
    // ...req.body,
    // id:lastId+1,
    // image:req.file?req.file.filename:"default-image.png"
    // }
    products.push(newProduct)

    writeProductsJson(products)
    res.redirect('/admin/products')
    },

    edit:function(req,res){
    let subcategories = products.map(product=>product.subcategory)
    let uniqueSubcategory = subcategories.filter((x, i , a)  => a.indexOf(x) === i)
    let productId = +req.params.id;
let productEdit = products.find(product => product.id === productId);
    res.render('admin/products/product-edit-form.ejs', {
        title:"producto a editar",
    products:productEdit,
    categories,
    subcategory:uniqueSubcategory        })
    

    }, update:function(req,res){
        const {name,description,category,subcategory,discount,price,marca} = req.body
    let productId = +req.params.id;
    products.forEach(product => {
        if(product.id === productId){
        product.id = product.id,
        product.name = name.trim(),
        product.description = description.trim(),
        product.category = category,
        product.subcategory = subcategory,
        product.discount = discount,
        product.price = price.trim(),
        product.image = req.file?req.file.filename:product.image,
        product.marca = marca.trim()
        }
    
        });
    
        writeProductsJson(products)

    res.redirect('/admin/products')


    },

delete:function(req,res){
    let productId = +req.params.id;
    products.forEach(product=> {
    if (product.id === productId) {
        if(fs.existsSync('./public/images/products/', product.image[0])){
            fs.unlinkSync(`./public/images/products/${product.image[0]}`)
        }else{
            console.log("no encontre el archivo");
    }
        let productADestroy = products.indexOf(product)
        if(productADestroy !== -1)  {
            products.splice(productADestroy, 1)
        }else{
            console.log("no encontre el producto a eliminar");
        }   
    }


    });
    writeProductsJson(products)

    res.redirect('/admin/products')

},
search:function(req,res){
let search = req.query.searchAdmin.toLowerCase().trim();
let resultados = products.filter(product=> product.name.toLowerCase().trim().includes(search))
res.render('admin/products/searchAdmin.ejs',{
    resultados,
    title:"resultado de busqueda",
    search
   
})

}

}

module.exports = controller;
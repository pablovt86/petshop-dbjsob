const fs = require('fs')
const path = require('path')
module.exports = {
    categories : JSON.parse(fs.readFileSync(path.join(__dirname,'/categories.json'), 'utf-8')),
    users : JSON.parse(fs.readFileSync(path.join(__dirname,'/usuarios.json'), 'utf-8')),
    products:JSON.parse(fs.readFileSync(path.join(__dirname,'/productos.json') , 'utf-8')),


writeProductsJson : (dataBase) =>  {
    fs.writeFileSync(path.join(__dirname,'/productos.json'),JSON.stringify(dataBase))
},
writeUsersJson : (dataBase) =>  {
    fs.writeFileSync(path.join(__dirname,'/usuarios.json'),JSON.stringify(dataBase))
},
writeCategoriesJson : (dataBase) =>  {
fs.writeFileSync(path.join(__dirname,'/categories.json'),JSON.stringify(dataBase))
}

}
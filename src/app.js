const express = require('express');
const app = express();
const path = require('path');
let port = 3000;
const methodOverride = require('method-override')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('./middleware/cokkieSession')


app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'petShop',
    resave: false,
    saveUninitialized: true
}))
app.use(cookieParser());
app.use(cookieSession)




app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//ENRUTADOR

let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');
let adminRouter = require('./routes/adminRouter');



// MIDDLEWARES
app.use('/users', usersRouter)
app.use('/', productsRouter)
app.use('/admin', adminRouter);



app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));


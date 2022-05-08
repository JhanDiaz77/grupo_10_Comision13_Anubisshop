const express = require ('express')
const app = express()
const path = require('path')
const PORT = 3000;
const methodOverride =  require('method-override'); 


/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

/* Middlewares de aplicación */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

/* Middleware de rutas */
app.use('/', indexRouter); // HOME - Contact 
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', userRouter); //Login, registro, perfil
app.use('/admin', adminRouter); //Admin, ABM Productos

app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})



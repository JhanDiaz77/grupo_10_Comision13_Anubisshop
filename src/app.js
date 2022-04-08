const express = require ('express')
const app = express()
const path = require('path')
const PORT = 3000;


/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

app.use(express.static(path.join(__dirname, 'public')));

/* Middleware de rutas */
app.use('/', indexRouter); // HOME - Contact 
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', usersRouter); //Login, registro, perfil



/* app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.src/views/home.ejs))}); */
/* app.use('/',indexRouter) */

/* app.get('/login', (req, res) => {
    res.render(path.join(__dirname, '.src/views/login.ejs'))
})
app.get('/register', (req, res) => {
    res.render(path.join(__dirname, 'register.ejs'))
})
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '.src/views/productCart.ejs'))
})
app.get('/detalles', (req, res) => {
    res.sendFile(path.join(__dirname, '..src/views/productDetail.ejs')) 
}) */



app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})



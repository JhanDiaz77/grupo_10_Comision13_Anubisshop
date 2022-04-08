const express = require ('express')
const app = express()
const path = require('path')
const PORT = 3000;


/* Views config */
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* Enrutadores */
const indexRouter = require('./routers/indexRouter');
const productsRouter = require('./routers/productsRouter');
const userRouter = require('./routers/userRouter');

app.use(express.static(path.join(__dirname, '../public')));

/* Middleware de rutas */
app.use('/', indexRouter); // HOME - Contact 
app.use('/productos', productsRouter); // Listado, detalle
app.use('/usuarios', userRouter); //Login, registro, perfil


app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})



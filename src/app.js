const express = require ('express')
const app = express()
const path = require('path')
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* Enrutadores */

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

/* Middlewares de rutas */

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/product', productRouter)


app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})
const express = require ('express')
const app = express()
const path = require('path')
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
/* rutas */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
})
app.get('/detalles', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})



app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})
const express = require ('express')
const app = express()
const path = require('path')
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

/* rutas */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
    `)
})
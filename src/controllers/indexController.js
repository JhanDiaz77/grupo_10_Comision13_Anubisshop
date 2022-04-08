
module.exports = {
    /* envia la vista */
    home: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('home')
    },
    contact: (req, res) => res.send("Contacto")
}
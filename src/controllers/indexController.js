
module.exports = {
    /* envia la vista */
    home: (req, res) =>{
        /* reenderiza la vista ejs */
        res.render('home', {
            titulo: "Anubisshop",
            titulo_producto: "Nuevo",
            descuento: "descuentos",
        })
    },
    contact: (req, res) => res.send("Contacto")
}
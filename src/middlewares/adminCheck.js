const adminCheck = (req, res, next) => {
    if(req.session.user.rol === "ADMIN"){
        next()
    }else{
        res.render("restriccion")
        /* res.send("No tenès permiso de administrador") */
    }
}

module.exports = adminCheck;
const adminCheck = (req, res, next) => {
    if(req.session.user.rol === "admin"){
        next()
    }else{
        res.send("No tenès permiso de administrador")
    }
}

module.exports = adminCheck;
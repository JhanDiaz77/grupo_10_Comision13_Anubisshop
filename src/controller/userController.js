const{ writeUsers, users } = require('../data')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const db = require("../database/models");

module.exports = {
    login: (req,res)  => {
         res.render('users/login', {
          titulo: "Login",
          css: "login.css",
          session: req.session
      })
    },

    processLogin: (req,res)  => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {

                req.session.user = {
                    id: user.id,
                    name: user.name,
                    /*  avatar: user.avatar, */
                    email: user.email,
                    rol: user.rol
                }
    
                if(req.body.remember){
                    const TIME_IN_MILISECONDS = 60000;
                    res.cookie('anubisCook', req.session.user, {
                        expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                        httpOnly: true,
                        secure: true
                    })
                }
    
                res.locals.user = req.session.user
    
                res.redirect('/')
            })
            .catch(error => console.log(error))

        }else{
            
            res.render('users/login', {
                titulo: "Login",
                css: "login.css",
                errors: errors.mapped(),
                session: req.session
            })
        }
    },

    register: (req,res)  => {
        res.render('users/register', {
            session: req.session
        })
        
    },
    processRegister: (req,res)  => {
        let errors = validationResult(req);     
        if(errors.isEmpty()){
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file ? req.file.filename : "default-image.jpg",
                rol_id: 1
            })
            .then((user) => {
                res.redirect("/usuarios/login")
            })
            .catch(error => res.send(error))

            

        }else{
            
            res.render('users/register', {
                titulo: "Registro",
                errors: errors.mapped(),
                session: req.session
            })
        }
              
    },
    logout: (req, res) => {
        req.session.destroy();

        if(req.cookies.anubisCook){
            res.cookie('anubisCook', "", { maxAge: -1 })
        }

        res.redirect('/')
    },

    userProfile: (req,res)  => { /* METODO AGREGADO (TODO) */

        db.User.findOne({
            where: {
                id: req.session.user.id
            },
            include: [{ association: "addresses" }],
        })
        .then((user) => {
            res.render("users/userProfile", {
                session: req.session,
                user,
                titulo: req.session.user.name,
                
            })
        })
    },
    profileUpdate: (req, res) => {
        
    },
    addressCreate: (req, res) => {

    },
    addressDestroy: (req, res) => {

    },
    
}


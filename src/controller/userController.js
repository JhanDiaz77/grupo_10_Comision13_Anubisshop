const{ writeUsers, users } = require('../data')
const { validationResult } = require('express-validator')


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
            let user = users.find(user => user.email === req.body.email);

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
            

            let lastId = 0;
            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let newUser = {
                id: lastId + 1,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.file ? req.file.filename : "default-image.jpg",
                rol: "user"
            }


            users.push(newUser)

            writeUsers(users)

            res.redirect('/usuarios/login')

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

        let userId = +req.params.id;
        let user = users.find(user => user.id === userId);

        res.render('users/userProfile',{
            user,
            session: req.session
            
        })

}
}


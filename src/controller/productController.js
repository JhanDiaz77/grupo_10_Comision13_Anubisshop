const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeProducts = (data) =>  fs.writeFileSync(productsFilePath, JSON.stringify(data), "utf-8");
const db = require('../database/models');
module.exports = {
     
    index: (req,res)  => {
     db.Products.findAll({
          include: [
            {association: "categorias" },
          ]
        })
          .then(products => {
               res.render('products/listProducts', {
                    products,
                    session: req.session,
               })
        })
     
    },
    
    detail: (req,res)  => {
          let productId = +req.params.id;

          db.Products.findByPk(productId)
          .then(product => {
            res.render('products/productDetail', { product, session: req.session, })
          })
          .catch(error => console.log(error))
     },

    productCart: (req,res) => {
         res.render('products/productCart', {
               session: req.session,
          })
    }
    
}


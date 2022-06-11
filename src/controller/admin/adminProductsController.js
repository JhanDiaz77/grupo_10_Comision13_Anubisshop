const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeProducts = (data) =>  fs.writeFileSync(productsFilePath, JSON.stringify(data), "utf-8");
const db = require('../../database/models');

module.exports = {
     list: (req, res) => {
     db.Products.findAll()
      .then(product => {
          res.render('admin/products/listProducts', {
               productos: product
        })
      })
        /* res.render('admin/products/listProducts',{
            productos: products
        })   */
     },
     productAdd: (req, res) => {
        res.render('admin/products/addProductForm')
     },/* para procesar la info del formulario de AGREGAR PRODUCTO */
     productCreate:(req ,res)  => {
          let errors = validationResult(req);
      
          if(errors.isEmpty()){
          db.Products.create({
               ...req.body,
               subcategory_id: 1,
               

          })
          .then((products) => {
               /* res.send(products) */
               res.redirect('/admin/list')
               /* let arrayImages = req.files.map(image => { */
               /*  return { */
                    /* imageName: image.filename, */
               /*  product_id: products.id,
                    subcategory_id: 1,
                    category_id: 1,
                    stock: true
               }  */
               /* }) */

               /*  db.ProductsImage.bulkCreate(arrayImages)
               .then(() => res.redirect('/admin/list'))
               .catch(error => console.log(error)) */
          })
          .catch(error => console.log(error))
          }else{
               res.render('admin/products/addProductForm', { 
               titulo: "Agregar producto",
               errors: errors.mapped()
               })
          } 

       /*  let lastId = 0;
        products.forEach(product => {
             if(product.id > lastId){
                  lastId = product.id
             }
        });

        let newProduct = {
          ...req.body,
          id: lastId + 1,
          image: req.file ? req.file.filename : "Anubisshop.png"
      }

        products.push(newProduct);

        writeProducts(products); */

      /* res.send('El producto a sido creado exitosamente.') */
      /* res.redirect('/admin/list') */
     },
     productEdit: (req, res)=>{
          let productId = +req.params.id;

          db.Products.findByPk(productId)
          .then(producto => {
          res.render('admin/products/editProductForm', {
          producto
          })
          })
          .catch(error => console.log(error))

        /* let producto = products.find( producto => producto.id === idProduct)

        res.render('admin/products/editProductForm', {producto}) */
     },
     productUpdate:(req,res)  => {

     let errors = validationResult(req);
          if(errors.isEmpty()){
          db.Products.update({
          ...req.body,
          },{
          where: {
               id: req.params.id
          }
          })
          .then(()=> {
          res.redirect('/admin/list')
          })
          .catch(error => console.log(error))
          }else{
          let productId = +req.params.id;

          db.Product.findByPk(productId )
          .then(producto => {
          res.render('admin/products/editProductForm', {
               titulo: "Editar producto",
               producto,
               errors: errors.mapped(),
               old: req.body
          })
          })
          .catch(error => console.log(error))
          }
        /* let productId = +req.params.id;
   
             products.forEach(product => {
                  if(product.id === productId){
                       product.name = req.body.name
                       product.price = req.body.price
                       product.description = req.body.description
                  }
             })
   
             writeProducts(products); */
   
            /* res.send(`Modificaste el producto exitosamente!`) */
           /*  res.redirect('/admin/list') */
            
     },
     productDelete: (req,res)  => {
        let productId = +req.params.id;

        db.Products.destroy({
          where: {
            id: productId 
          }
        })
        .then(()=>res.redirect('/admin/list'))
        .catch(error => console.log(error))

       /*  products.forEach(product => {
             if(product.id === productId){
                  productToDelete = product.name
                  let productToDeleteIndex = products.indexOf(product);
                  products.splice(productToDeleteIndex, 1);
             }
        }); */
        
        /* writeProducts(products) */

        /* res.send('Eliminaste el producto') */
       /*  res.redirect('/admin/list') */
     },
    
}
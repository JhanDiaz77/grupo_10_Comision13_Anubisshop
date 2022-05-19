const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const writeProducts = (data) =>  fs.writeFileSync(productsFilePath, JSON.stringify(data), "utf-8");

module.exports = {
    list: (req, res) => {
        res.render('admin/products/listProducts',{
            productos: products
        })  
    },
    productAdd: (req, res) => {
        res.render('admin/products/addProductForm')
    },/* para procesar la info del formulario de AGREGAR PRODUCTO */
    productCreate:(req ,res)  => {
        let lastId = 0;
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

        writeProducts(products);

      /* res.send('El producto a sido creado exitosamente.') */
      res.redirect('/admin/list')
    },
    productEdit: (req, res)=>{
        let idProduct = +req.params.id;

        let producto = products.find( producto => producto.id === idProduct)

        res.render('admin/products/editProductForm', {producto})
    },
    productUpdate:(req,res)  => {

        let productId = +req.params.id;
   
             products.forEach(product => {
                  if(product.id === productId){
                       product.name = req.body.name
                       product.price = req.body.price
                       product.description = req.body.description
                  }
             })
   
             writeProducts(products);
   
            /* res.send(`Modificaste el producto exitosamente!`) */
            res.redirect('/admin/list')
            
       },
    productDelete: (req,res)  => {
        let productId = +req.params.id;
        let productToDelete;

        products.forEach(product => {
             if(product.id === productId){
                  productToDelete = product.name
                  let productToDeleteIndex = products.indexOf(product);
                  products.splice(productToDeleteIndex, 1);
             }
        });
        
        writeProducts(products)

        /* res.send('Eliminaste el producto') */
        res.redirect('/admin/list')
  },
    
}
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controller = {
    index: (req,res)  => {
        let productsDestacado = products.filter(product => product.promo === "destacado");
		let productsOferta = products.filter(product => product.promo === "oferta");

        res.render('home' , {
			productsDestacado,
			productsOferta
		})
    }
    
}

module.exports = controller
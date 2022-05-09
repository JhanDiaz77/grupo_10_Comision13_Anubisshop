const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

const controller = {
    index: (req,res)  => {
        let productsDestacado = products.filter(product => product.promo === "destacado");
		let productsOferta = products.filter(product => product.promo === "oferta");

        res.render('home' , {
			productsDestacado,
			productsOferta
		})
    },
    search: (req,res)  => {

        let searchResult = [];

		products.forEach(product => {
			if(removeAccents(product.name.toLowerCase()).includes(req.query.keywords.toLowerCase())){
				searchResult.push(product)
			}
		});

		res.render('result', {
			searchResult,
			keyword: req.query.keywords,
		});
    }
    
}

module.exports = controller
module.exports = {
    productDetail: (req,res)  => {
         res.render('productDetail')
    },

    productCart: (req,res)  => {
         res.render('productCart')
    },
    
    editProduct: (req,res)  => {
         res.render('editProductForm')
    },
    
    addProduct: (req,res)  => {
         res.render('addProductForm')
    }
    
}


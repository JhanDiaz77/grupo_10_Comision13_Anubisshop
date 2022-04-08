module.exports = {
    productDetail: (req,res)  => {
         res.render('products/productDetail')
    },

    productCart: (req,res)  => {
         res.render('products/productCart')
    },
    
    editProduct: (req,res)  => {
         res.render('admin/editProductForm')
    },
    
    addProduct: (req,res)  => {
         res.render('admin/addProductForm')
    }
    
}


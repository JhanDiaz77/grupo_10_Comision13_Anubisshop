module.exports = function(sequelize, dataTypes){
    let alias = 'Products';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
<<<<<<< HEAD
        name:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        price:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        description:{
            type:dataTypes.STRING(800)
        },
        promo:{
            type:dataTypes.STRING(20)
        },
        discount:{
            type:dataTypes.INTEGER(11)
        },
        
        subcategoryId:{
=======
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        precio:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(800)
        },
        promocion:{
            type:dataTypes.STRING(45)
        },
        descuento:{
            type:dataTypes.INTEGER(11)
        },
        
        subcategoria_id:{
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: "products",
<<<<<<< HEAD
        timestamps: false,
=======
        timestamps: true,
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);

 

    return Product;
}
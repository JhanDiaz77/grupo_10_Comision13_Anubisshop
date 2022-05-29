module.exports = function(sequelize, dataTypes){
    let alias = 'Products';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
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
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);

 

    return Product;
}
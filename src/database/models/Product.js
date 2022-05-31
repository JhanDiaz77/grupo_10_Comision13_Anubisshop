module.exports = function(sequelize, dataTypes){
    let alias = 'Products';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
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
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);

 

    return Product;
}
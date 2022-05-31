module.exports = (sequelize, dataTypes)=>{
    let alias = 'ProductImages'

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        imagen:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        producto_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    
    let  config = {
        tableName:'product_images',
        timestamps:false
    }

    const Product_image = sequelize.define(alias, cols, config);

    
    return Product_image;
}
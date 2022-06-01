module.exports = (sequelize, dataTypes)=>{
    let alias = 'ProductImages'

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        image_name:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        producto_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    
    let  config = {
        tableName:'products_images',
        timestamps:false
    }

    const ProductImage = sequelize.define(alias, cols, config);

    ProductImage.associate = (models) => {
        ProductImage.belongsTo(models.Product, {
            as: "product",
            foreingKey: "product_id"
        })
    }
    
    return ProductImage;
}
module.exports = (sequelize, dataTypes)=>{
    let alias = 'Products_images'

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        imageNmae:{
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

    const Products_images = sequelize.define(alias, cols, config);

    
    return Products_images;
}
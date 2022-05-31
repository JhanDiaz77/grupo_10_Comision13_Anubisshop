module.exports = (sequelize, dataTypes)=>{
    
    let alias = 'Subcategories';

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
<<<<<<< HEAD
        name:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        categoryId:{
=======
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        categoria_id:{
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: "subcategories",
        timestamps:false
    }

    const Subcategory = sequelize.define(alias, cols, config);
    
    return Subcategory;
}
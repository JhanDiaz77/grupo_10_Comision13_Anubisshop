module.exports = (sequelize, dataTypes)=>{
    
    let alias = 'Subcategories';

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        categoryId:{
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
module.exports = (sequelize, dataTypes) => {

    let alias = 'Category';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:dataTypes.STRING(45),
            allowNull:false
        }
    } 

    let config = {
        tableName:'categories',
        timestamps:false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = (models) => {
        Category.hasMany(models.SubCategory, {
            as: "subCategories",
            foreignKey: "categoryId"
        })
    }
    
    return Category;
}
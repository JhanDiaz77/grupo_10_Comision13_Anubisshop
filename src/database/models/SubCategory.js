module.exports = (sequelize, dataTypes)=>{
    
    let alias = 'SubCategory';

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        categoryId:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: "sub_categories",
        timestamps:false
    }

    const SubCategory = sequelize.define(alias, cols, config);
    
    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId"
        })
        SubCategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "SubcategoryId"
        })
    }

    return SubCategory;
}
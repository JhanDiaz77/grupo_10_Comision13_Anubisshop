module.exports = (sequelize, dataTypes) => {

    let alias = 'Address';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        street:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        city:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        province:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        number:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        postal_code:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        userId:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
        
    } 

    let config = {
        tableName:'addresses',
        timestamps:false
    }

    const Address= sequelize.define(alias, cols, config);

    Address.associate = (models) => {
        Address.hasMany(models.User, {
            as: "users",
            foreignKey: "user_id"
        })
    }
    return Address;
}
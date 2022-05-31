module.exports = (sequelize, dataTypes) =>{

    let alias = 'Orders';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
        userId:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: 'orders'
    }

    const Orders = sequelize.define(alias, cols, config);

    return Orders

}
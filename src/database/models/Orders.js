module.exports = (sequelize, dataTypes) =>{

    let alias = 'Orders';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
        usuario_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: 'orders'
    }

    const Purchase = sequelize.define(alias, cols, config);

    return Purchase

}
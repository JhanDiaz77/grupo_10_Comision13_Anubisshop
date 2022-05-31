module.exports = (sequelize, dataTypes) =>{

    let alias = 'Orders';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
<<<<<<< HEAD
        userId:{
=======
        usuario_id:{
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
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
module.exports = (sequelize, dataTypes) =>{

    let alias = 'Order_Items';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
        orden_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        producto_id:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        cantidad: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        }
    }

    let config = {
        tableName: 'order_items',
        timestamps: false
    }

    const Order_Items = sequelize.define(alias, cols, config);

    return Order_Items

}
module.exports = (sequelize, dataTypes) =>{

    let alias = 'Order_Items';

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false    
        },
        orderId:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        productId:{
            type: dataTypes.INTEGER(11),
            allowNull:false
        },
        quantity: {
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
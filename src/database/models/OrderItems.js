module.exports = (sequelize, dataTypes) =>{

    let alias = 'OrderItem';

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

    const OrderItem = sequelize.define(alias, cols, config);

    OrderItem.associate = (models) => {
        OrderItem.belonsTo(models.Order, {
            as: "order",
            foreignKey: "orderId"
        })
        OrderItem.hasMany(models.Product, {
            as: "products",
            foreignKey: "productId"
        })
    }

    return OrderItem

}
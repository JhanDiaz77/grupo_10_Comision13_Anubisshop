module.exports = function(sequelize, dataTypes){
    let alias = 'Users';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type:dataTypes.STRING(60),
            allowNull:false
        },
        password:{
            type:dataTypes.STRING(70),
            defaultValue: null
        },
        telefono:{
            type:dataTypes.STRING(30),
            defaultValue: null
        },
        rol:{
            type:dataTypes.BOOLEAN,
            defaultValue:0,
            allowNull:false
        }
    }

    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}
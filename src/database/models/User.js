module.exports = function(sequelize, dataTypes){
    let alias = 'Users';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
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
        phone:{
            type:dataTypes.STRING(30),
            defaultValue: null
        },
        rol_id:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }

    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true
    }

    const Users = sequelize.define(alias, cols, config);

    return Users;
}
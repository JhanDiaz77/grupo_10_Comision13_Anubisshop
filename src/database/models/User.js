module.exports = function(sequelize, dataTypes){
    let alias = 'Users';

    let cols= {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
<<<<<<< HEAD
        name:{
=======
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        apellido:{
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
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
<<<<<<< HEAD
        phone:{
            type:dataTypes.STRING(30),
            defaultValue: null
        },
        rol_id:{
            type:dataTypes.INTEGER(11),
=======
        telefono:{
            type:dataTypes.STRING(30),
            defaultValue: null
        },
        rol:{
            type:dataTypes.BOOLEAN,
            defaultValue:0,
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
            allowNull:false
        }
    }

    let config = {
        tableName: "users",
<<<<<<< HEAD
        timestamps: false,
        underscored: true
    }

    const Users = sequelize.define(alias, cols, config);

    return Users;
=======
        timestamps: true,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config);

    return User;
>>>>>>> 82afa9b34e933aad11349446ad8cc5587441d516
}
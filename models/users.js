module.exports = function(sequelize, DataType){
    // Model Users
    var users = sequelize.define('users', {
        nome: { 
            type: DataType.STRING,
            field: 'nome'
        },
        login: { 
            type: DataType.STRING,
            field: 'login'
        },
        password: { 
            type: DataType.STRING,
            field: 'password'
        },
        email: { 
            type: DataType.STRING,
            field: 'email'
        }
    },{freezeTableName: true});
    
    return users;
}
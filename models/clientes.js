module.exports = function(sequelize, DataType) {
    // Model Users
    var clientes = sequelize.define('clientes', {
        cli_id: {
            type: DataType.INTEGER,
            field: 'cli_id',
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataType.STRING,
            field: 'nome'
        },
        enderco: {
            type: DataType.STRING,
            field: 'enderco'
        },
        telefone: {
            type: DataType.STRING,
            field: 'telefone'
        },
        email: {
            type: DataType.STRING,
            field: 'email'
        }
    }, { freezeTableName: true });

    return clientes;
}
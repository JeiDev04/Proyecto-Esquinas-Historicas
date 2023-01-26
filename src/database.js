const Sequelize = require('sequelize');

const database = new Sequelize(
    'sitioshistoricos', // Nombre de base de datos
    'root', // User de la base de datos
    'SuperJei.4', // Password de la base de datos
    {
        host: "localhost",
        dialect: "mysql"
    }
);

database.sync();

module.exports = database;
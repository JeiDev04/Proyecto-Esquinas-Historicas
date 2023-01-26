// import sequelize
var Sequelize = require('sequelize');
// import connection database
var sequelize = require('../database');

var user = sequelize.define('user',{
    id:{
        type: Sequelize.BIGINT,
        primaryKey:true,
        autoIncrement: true,
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = user;
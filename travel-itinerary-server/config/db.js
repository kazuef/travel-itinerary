const { Sequelize } = require('sequelize');

// データベース接続の設定
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
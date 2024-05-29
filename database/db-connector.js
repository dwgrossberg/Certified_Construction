// ./database/db-connector.js
var mysql = require("mysql");

// Define credentials for both users
const credentials = {
  heroku: {
    connectionLimit: 10,
    host: process.env.HEROKU_DB_HOST,
    user: process.env.HEROKU_DB_USER,
    password: process.env.HEROKU_DB_PWD,
    database: process.env.HEROKU_DB_DB,
  },
};

var dbUser = process.env.DB_USER;

var pool = mysql.createPool(credentials[dbUser]);

// Export it for use in our application
module.exports.pool = pool;

// ./database/db-connector.js

var mysql = require('mysql');

// Define credentials for both users
const credentials = {
         connectionLimit: 10,
         host: process.env.DB_HOST,
         user: process.env.DB_USER_NAME,
         password: process.env.DB_PWD,
         database: process.env.DB_USER_NAME
 };

var pool = mysql.createPool(credentials);

// Export it for use in our application
module.exports.pool = pool;
// ./database/db-connector.js

var mysql = require('mysql');

// Define credentials for both users
//const credentials = {
//    grossbed: {
//        connectionLimit: 10,
//         host: 'classmysql.engr.oregonstate.edu',
//         user: 'cs340_grossbed',
//         password: '7102',
 //        database: 'cs340_grossbed'
//     },
//     duongdi: {
//         connectionLimit: 10,
//         host: 'classmysql.engr.oregonstate.edu',
//         user: 'cs340_duongdi',
//         password: '0749',
//         database: 'cs340_duongdi'
//     }
// };

var pool = mysql.createPool({
    connectionLimit: 10,
        host: 'classmysql.engr.oregonstate.edu',
        user: 'cs340_duongdi',
        password: '0749',
        database: 'cs340_duongdi'
})

// var dbUser = process.env.DB_USER || 'duongdi'; // Default to 'duongdi' if not set


//var pool = mysql.createPool(credentials[dbUser]);

// Export it for use in our application
module.exports.pool = pool;

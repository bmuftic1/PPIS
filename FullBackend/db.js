const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'remotemysql.com',
    user: 'kPWlOUSi7e',
    password: 'AtvcIMBJqA',
    database: 'kPWlOUSi7e'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;
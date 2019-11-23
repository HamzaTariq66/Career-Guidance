const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'career_guide'
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log('DB is connected.');
    } else
        console.log('DB failed to connect: '+JSON.stringify(err,undefined, 2));
});

module.exports = mysqlConnection;
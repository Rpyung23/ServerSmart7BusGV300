const mysql = require("mysql2");

let connDB = () =>
{


    var conn = mysql.createConnection({
        host: '159.223.111.107',
        user: 'root',
        database: 'smart7bus',
        password: 'Urbano1972102030*',
        port:3306
    });

    return conn;
}

module.exports = connDB
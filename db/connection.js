const mysql = require("mysql2");
{
    var password = (
        "KiloUtahMikeOscar75"
    );
}

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: password,
        database: "election"
    },
    console.log("Connected to election database")
);

module.exports = db;
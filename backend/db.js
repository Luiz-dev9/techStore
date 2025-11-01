const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kssantana@11", 
    database: "TechStore"
});

connection.connect((err) => {
     if(err) throw err;
    console.log("conectado ao banco de dados")
});

module.exports = connection;

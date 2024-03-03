const mysql = require('mysql2');
const config = {
    host: '192.168.1.40',
    user: 'root',
    password: 'root',
    database: 'camping'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("db is connected ")
    }
})


module.exports= connection;
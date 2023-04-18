// const {Client} = require("pg");
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pavan1982",
  database: "register",
});

// const client = new Client({
// 	host: "localhost",
// 	user: "postgres",
// 	password: "Prasanna1308",
// 	database: "prasanna",
// });

// client.connect((err) => {
// 	if (!err) {
// 		console.log("Connected");
// 	} else {
// 		console.log("NOt connected");
// 	}
// });

module.exports = db;

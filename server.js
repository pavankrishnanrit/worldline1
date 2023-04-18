const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");

const db = require("./db");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.json("Hello world");
});

app.get("/register", (req, res) => {
	res.render("register");
});

app.post("/register", (req, res) => {
	const {fname, lname, email, address} = req.body;
	db.query(
		"INSERT INTO student1(fname, lname, email, address) VALUES($1, $2, $3, $4)",
		[fname, lname, email, address],
		(error, result) => {
			if (!error) {
				res.redirect("details");
			} else {
				console.log(error);
			}
		}
	);
});
app.get("/details", (req, res) => {
	db.query("SELECT * FROM student1", (error, result) => {
		if (!error) {
			res.render("details", {result: result.rows});
		} else {
			console.log(error);
		}
	});
});

app.listen(8080, (req, res) => {
	console.log(`Sever is running on 8080`);
});

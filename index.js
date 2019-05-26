const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
var routes = require("./routes");

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/messageboard");
var db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});

db.once("open", function(){
	console.log("db connection successful");
});
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if(req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
		return res.status(200).json({});
	}
	next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

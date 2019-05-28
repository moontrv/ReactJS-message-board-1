const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MessageBoard = require("./models").MessageBoard;

const app = express();
var routes = require("./routes");

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/messageboard");
var db = mongoose.connection;

db.on("error", function (err) {
	console.error("connection error:", err);
});

db.once("open", function () {
	console.log("db connection successful");

	const Schema = mongoose.Schema;

	var messageBoardData = {
        channels: [
            {
                name: "Channel1",
                message: [],
                id: 1
            },
            {
                name: "Channel2",
                message: [],
                id: 2
            },
            {
                name: "Channel3",
                message: [],
                id: 3
            },
            {
                name: "Channel4",
                message: [],
                id: 4
            }
        ],
        selectChannel: 0
    };

	MessageBoard.remove({}, function (err) {
		if (err) console.error(err);
		MessageBoard.create(messageBoardData, function (err, animals) {
			if (err) console.error(err);
			// When run in script to generate data -> close db
			// db.close(function () {
			// 	console.log("db connection closed");
			// });
		});
	});
});
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
		return res.status(200).json({});
	}
	next();
});

app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Error Handler

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

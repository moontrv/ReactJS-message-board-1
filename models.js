'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessageBoardSchema = new Schema({
	channels: Array,
    selectChannel: Number,
    createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});


var MessageBoard = mongoose.model("MessageBoard", MessageBoardSchema);

module.exports.MessageBoard = MessageBoard;

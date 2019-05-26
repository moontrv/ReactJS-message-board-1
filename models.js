'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageBoardSchema = new Schema({
	channels: Array,
    selectChannel: Number,
    createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});


const MessageBoard = mongoose.model("Booking", MessageBoardSchema);

module.exports.MessageBoard = MessageBoard;

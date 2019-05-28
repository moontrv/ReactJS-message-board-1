'use strict';

const express = require("express");
const router = express.Router();
const MessageBoard = require("./models").MessageBoard;

router.param("cID", function(req,res,next,id){
	MessageBoard.find({}, function(err, doc){
        let channels = doc[0].channels;        
        let foundChannel;
        channels.map(function(channel){
            if(channel.id == id){
                foundChannel = channel;
            }
        });
        if(err) return next(err);     
		if(!foundChannel) {
			err = new Error("Not Found");
			err.status = 404;
			return next(err);
        }        
        req.channelId = id;
        req.doc = doc;
        req.foundChannel = foundChannel;
		return next();
	});
});

router.get("/channels", function (req, res) {
    MessageBoard.findOne({}, function(err, doc){
        res.json(doc.channels);
    });   
});

router.get("/messages/:cID", function (req, res) {
    res.json(req.foundChannel.message);
});

router.put("/channel/:cID", function (req, res, next) {
    var message = req.body;  
    MessageBoard.findOne({}, function(err, doc){
        doc.channels.map(function(channel){
            if(channel.id == req.channelId){                
                channel.message.push(message.message);                
            }
        });
        MessageBoard.findByIdAndUpdate(doc._id, doc, function(err, doc){
        });
        res.json({result: "success"});
    }); 
});

module.exports = router;
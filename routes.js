'use strict';

const express = require("express");
const router = express.Router();
const MessageBoard = require("./models").MessageBoard;

router.get("/channels", function (req, res, next, id) {
    res.json({
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
        selectChannel: undefined
    });
    next();
});

router.get("/messages/:cID", function (req, res, next, id) {
    MessageBoard.findAll(id, function (err, doc) {
        if (err) return next(err);
        if (!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.customer = doc;
        return next();
    });
    next();
});

router.put("/channel/:cID", function (req, res, next, id) {
    const channelId = req.params.cID;
    MessageBoard.findAll(id, function (err, doc) {
        if (err) return next(err);
        if (!doc) {
            err = new Error("Not Found");
            err.status = 404;
            return next(err);
        }
        req.customer = doc;
        return next();
    });
    next();
});

module.exports = router;
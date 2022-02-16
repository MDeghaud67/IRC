const Chat = require('../models/Chat');
var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require("socket.io")(http);

exports.sendMessage = (req, res, next) => {
    const chat = new Chat({
        ...req.body
    });
    chat.save()
        .then(() => {
            io.emit('message', req.body);
            res.status(201).json({ message: 'Message envoyé !' });
        })
        .catch(error => res.status(400).json({ error }));
};

exports.listMessages = (req, res, next) => {
    Chat.find()
        .then((msg) => {
            res.status(200).json(msg)
        })
        .catch(error => res.status(400).json({ error }));
};
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const { generateMessage } = require('./utils/message');

const resourcePath = path.join(__dirname, '../public');
app.use(express.static(resourcePath));

const server = http.createServer(app);

var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('User is connected!');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat!'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined!'));

    socket.on('createMessage', (messageData, callback) => {
        console.log(messageData);
        socket.broadcast.emit('newMessage', generateMessage(messageData.from, messageData.text));
        callback('Your message was sent!');
    })
    socket.on('disconnect', () => {
        console.log('User is disconnected')
    })
});

server.listen(3000);

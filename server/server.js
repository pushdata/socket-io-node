const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();

const resourcePath = path.join(__dirname, '../public');
app.use(express.static(resourcePath));

const server = http.createServer(app);

var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('User is connected!');

    socket.emit('newMessage', {
        from: 'Sai Prudhvi',
        email: 'sai@example.com',
        createdAt: new Date().toString()
    });

    socket.on('createMessage', (messageData) => {
        console.log(messageData);
    })

    socket.on('disconnect', () => {
        console.log('User is disconnected')
    });
})

server.listen(3000);

var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        to: 'Mike',
        email: 'mike@example.com'
    });
});

socket.on('newMessage', function(messageData) {
    console.log(messageData);
})

socket.on('disconnect', function() {
    console.log('unable to connect to server!');
})
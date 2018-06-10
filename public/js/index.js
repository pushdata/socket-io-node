var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('newMessage', function(messageData) {
    console.log(messageData);
})

socket.on('disconnect', function() {
    console.log('unable to connect to server!');
})

socket.emit('createMessage', {
    from: 'Sai',
    text: 'Just a sample text'
}, function(ack) {
    console.log(ack);
})
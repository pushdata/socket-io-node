var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('newMessage', function(messageData) {
    console.log(messageData);
    var message = jQuery('<li></li>');
    message.text(`${messageData.from} : ${messageData.text} ${new Date().toLocaleTimeString()}`);
    jQuery('#messages').append(message);
})

socket.on('disconnect', function() {
    console.log('unable to connect to server!');
})


jQuery('#message-form').on('submit', (e) => {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(ack) {
        console.log(ack);
    })
})
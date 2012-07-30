// Include the net.io server library
var NetIo = require('../../net.io-server').Server,
	server = new NetIo(2000);

// Listen for connections
server.on('connection', function (socket) {
	console.log('Client connected:', socket.id);

	// Setup event listeners for the new connection
	socket.on('message', function (data) {
		// Check for a chat command
		if (data._chatCmd) {
			switch (data._chatCmd) {
				case 'displayName':
					socket.data('displayName', data.data);
					break;
			}
		} else {
			// Send the data to every connected client
			data.msg = socket.data('displayName') + ': ' + data.msg;
			server.send(data);
		}
	});

	socket.on('disconnect', function () {
		console.log('Client disconnected:', socket.id);
	});
});
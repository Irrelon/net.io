// Include the net.io server library
var NetIo = require('../../net.io-server').Server,
	server = new NetIo(2000);

// Listen for connections
server.on('connection', function (socket) {
	console.log('Client connected:', socket.id);

	// Setup event listeners for the new connection
	socket.on('message', function (data) {
		// Log the message the client sent us
		console.log('Client said:', data);

		// Send a JSON object back
		socket.send({msg:"hello!"});

		// Close the connection and provide a reason to the client
		socket.close('End of session :)');
	});

	socket.on('disconnect', function () {
		console.log('Client disconnected:', socket.id);
	});
});
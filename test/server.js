// Include the net.io server library
var NetIo = require('../net.io-server').Server;
var server = new NetIo(2000);

server.on('connection', function (socket) {
	console.log('Client connected:', socket.id);

	socket.on('disconnect', function () {
		console.log('Client disconnected:', socket.id);
	});

	socket.send({msg:"hello!"});
	socket.close('booted');
});
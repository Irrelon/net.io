// Connect to the server "localhost" on port 2000
var io = new NetIo.Client('http://localhost:2000');

// Setup event listeners
io.on('connect', function () {
	console.log('Connected with session id:', io.id);

	io.send({data:'hello server!'});
});

io.on('message', function (data) {
	console.log('Message:', data);
});

io.on('disconnect', function (data) {
	console.log('Disconnected with reason:', data.reason);
});

io.on('error', function (data) {
	console.log('Error with reason:', data.reason);
});
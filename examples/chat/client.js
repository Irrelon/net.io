var ChatClient = (function () {
	var client = function () {};

	client.prototype.connect = function (displayName) {
		var self = this;

		// Connect to the server "localhost" on port 2000
		this.io = new NetIo.Client('http://localhost:2000');

		// Setup event listeners
		this.io.on('connect', function () {
			// Tell the server what our display name is!
			self.io.send({_chatCmd:'displayName', data: displayName});
			self.addMessage({msg:'Connected with session id: ' + self.io.id});
		});

		this.io.on('message', function (data) {
			self.addMessage(data);
		});

		this.io.on('disconnect', function (data) {
			self.addMessage({msg:'Disconnected with reason: ' + data.reason});
		});

		this.io.on('error', function (data) {
			self.addMessage({msg:'Error with reason: ' + data.reason});
		});
	},

	client.prototype.sendMessage = function (data) {
		this.io.send(data);
	};

	client.prototype.addMessage = function (data) {
		var chatLog = document.getElementById('chatLog');
		chatLog.innerHTML += data.msg + '\n';
	};

	return client;
}());

var chatClient = new ChatClient();
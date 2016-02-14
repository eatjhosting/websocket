var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

var port = 0; //Please put your port number here. You can find your port number at http://nodejs.eatj.com/account.jsp

if(port == 0) {
	console.log('Please find your port number at http://nodejs.eatj.com/account.jsp and change it in this file');
	process.exit();
}
server.listen(port);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});
});

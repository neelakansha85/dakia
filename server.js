
var express=require('express');
var app=express();
var port = process.env.PORT || 3000;
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
app.use(express.static('./views/'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

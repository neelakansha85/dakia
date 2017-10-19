
var express=require('express');
var app=express();
var port = process.env.PORT || 3000;
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');
app.use(express.static('./views/'));

require("./controller/controller.js")(app,io);

http.listen(port, function(){
  console.log('listening on *:' + port);
});

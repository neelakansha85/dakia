var mongoose = require('mongoose');

var dbName = 'dakia';
var dbHost = 'localhost';
var dbPort = '27017';
var dbUser = '';
var dbPass = '';  


var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;


// Setting up the link to connect to MonogDB.
var monogdbLink = 'mongodb://' +dbHost+ '/' +dbName;
console.log(monogdbLink);
var dbConnected = mongoose.connect(monogdbLink, {
	useMongoClient: true
});

dbConnected.then(function(db) {
	console.log("CONNECTION SUCCESSFULL");

})
.catch(function(err){
	console.log('Connection Not possible because of the following error '+err);
});


module.exports.user=mongoose.model('User',new Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{strict: false}));
module.exports.online=mongoose.model('online',new Schema({
    handle:String,
    connection_id:String
}));
module.exports.messages=mongoose.model('message',new Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
}));
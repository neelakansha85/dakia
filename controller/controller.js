var models = require('../model/model.js');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function (app,io){
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({     
        extended: true
    }));
    
    app.get('/',function(req,res){
        res.sendFile(path.resolve(__dirname+"/../views/index.html"));
    });

}

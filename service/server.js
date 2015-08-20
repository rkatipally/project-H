var express    = require('express');        // call express

var app        = express();  



var bodyParser = require('body-parser');

//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router    = require('/Users/raj/work/ekarma-service/app/service/routing'); 
app.use(express.static('./../'));
var port =  8081	;        // set our port
app.use("/api", router);
app.listen(port);
var express = require('express');
var bodyParser = require('body-parser');
var port = 8000;
var fs = require('fs');

var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});













app.listen(port, function(){
    console.log('Listening 8000');
  })

var express = require('express');
var bodyParser = require('body-parser');
var port = 8000;
var fs = require('fs');

var productsRef = require('./products.json');
var receitRef = require('./receits.json');

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


///// Requests

function getProductsFromFile(){
  let content = fs.readFileSync('./products.json');
return JSON.parse(content);
}


app.get('/getAllProducts', function(req, res){

let content = getProductsFromFile();
res.send(getProductsFromFile());
})

app.get('/getAllProductsInCategory/:category', function(req, res){

let content = getProductsFromFile();
let promises = content.filter(item => item.category === req.params.category)
Promise.all(promises)
  .then( promises =>{
  res.send(promises)
})
})











app.listen(port, function(){
    console.log('Listening 8000');
  })

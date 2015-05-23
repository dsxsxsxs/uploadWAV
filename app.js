var port=3000;
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/assets/'));
app.use(bodyparser());
app.get('/', function(req, resp){
    resp.sendfile(__dirname+'/assets/index.html');
});
app.post('/wav', function(req, resp){


});

app.listen(port);

console.log("express server is running on: "+port);

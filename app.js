var port=3000;
var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/assets/'));
app.use(bodyparser({limit: '50mb', extended: true}));
app.get('/', function(req, resp){
    resp.sendfile(__dirname+'/assets/index.html');
});
app.post('/wav', function(req, resp){
    console.log(req.body.wavename);
    var buf = new Buffer(req.body.blob, 'base64')
    fs.writeFile(__dirname+"/wave/"+req.body.wavename, buf, function(err) {
      if(err) {
        console.error(err);
      }
        resp.send({rs: true});
    });
});

app.listen(port);

console.log("express server is running on: "+port);

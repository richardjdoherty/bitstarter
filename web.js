/*  replace with code shown in HW4 as a new web.js

var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

*/

var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("listening on " + port);
});


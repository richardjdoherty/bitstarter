var fs = require('fs');

//var buf = new Buffer(1024);

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});



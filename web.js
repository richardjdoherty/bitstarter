var buffer = new buffer(30);

var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send('reached break point1');
    var buffer  = fs.readFileSync('index.html');
    response.send(buffer);
}

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

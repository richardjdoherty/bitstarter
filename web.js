var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World Test2!');
    response.send('reached break point');
    fs.readFileSync('index.html', function (err, data) {
	if (err) throw err;
	response.send(data);
	response.send('reached break point 2');
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

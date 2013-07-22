
var buf = new Buffer('Hello World from index.html!','utf-8');

var express = require('express');
var app = express();
app.use(express.logger());


fs.readFileSync(this.directory + '/index.html', function (err, buf) {
  response.send('reached checkpoint');
  if (err) throw err;
  
});

app.get('/', function(request, response) {
  response.send(buf.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



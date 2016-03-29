var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  fs.readFile('index.html', (err, data) => {
    var result = ejs.render(data.toString(), {version:'0.1'});
    res.end(result);
  });
});

server.listen(8000);

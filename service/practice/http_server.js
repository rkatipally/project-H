var http = require("http");

var server = http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  debugger;
	  res.end('Hello World\n');});
console.log("sevver created using nodemon");
server.listen("1757", "localhost");
var http = require('http');

console.log('node.js application starting...');

var svr = http.createServer(function(req, resp) {
    resp.end('This is the first test proxy!!!');
});

svr.listen(9000, function() {
    console.log('Node HTTP server is listening');
});

// This is a new revision!!!


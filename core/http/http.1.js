const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    console.log(url.parse(req.url));
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(JSON.stringify(url.parse(req.url, true)));
}).listen(3000);

server.on('connection', function (req, res) {
    console.log('connect!');
});

server.on('close', function (req, res) {
    console.log('close');
});
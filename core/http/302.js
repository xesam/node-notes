const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Location': 'https://www.baidu.com'
    });
    res.end();
}).listen(20000);
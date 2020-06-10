const net = require('net');

let count = 0;

const server = net.createServer(conn => {
    conn.setEncoding('utf8');
    conn.write(count + "connected,please write your name and press enter;");
    count++;
    conn.on('close', () => {
        count--;
    });
    conn.on('data', data => {
        console.log(data);
    });
});
server.listen(3000, () => {
    console.log('server listening on *.3000');
});


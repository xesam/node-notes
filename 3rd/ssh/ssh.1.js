const node_ssh = require('node-ssh');

const ssh = new node_ssh();

ssh.connect({
    host: FE_HOST_1,
    username: authConfig.username,
    password: authConfig.password,
    port: 22 //SSH连接默认在22端口
}).then(function () {
    ssh.exec('ls', ['-l'], {
        cwd: '/home/xiaopingyuan/',
        onStdout(chunk) {
            console.log('stdoutChunk', chunk.toString('utf8'))
        },
        onStderr(chunk) {
            console.log('stderrChunk', chunk.toString('utf8'))
        },
    })
}).catch(err => {
    console.log('ssh连接失败:', err);
    process.exit(0);
});
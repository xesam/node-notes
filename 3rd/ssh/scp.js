const client = require('scp2');

const USER_HOME = process.env.HOME || process.env.USERPROFILE;
const config = require(`${USER_HOME}/ssh-fe.json`);

function copy(localPath, remote, remotePath) {
    client.scp(localPath, {
        username: config.user.username,
        password: config.user.password,
        host: remote,
        path: remotePath
    }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('successful');
        }
    });
}

copy('D:\\work-o2o\\landing-pages\\20200610', config.fe2.host, config.fe2.dir);
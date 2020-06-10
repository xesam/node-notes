const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('ev', action => {
    console.log(action);
});

emitter.once('once-ev', action => {
    console.log(action);
});

emitter.on('error', e => {
    console.error(e);
});

emitter.emit('ev', {
    msg: 'this is msg a'
});
emitter.emit('ev', {
    msg: 'this is msg b'
});
emitter.emit('once-ev', {
    msg: 'this is msg c'
});
emitter.emit('once-ev', {
    msg: 'this is msg d'
});
emitter.emit('error', {
    msg: 'this is error'
});


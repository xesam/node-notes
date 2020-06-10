const fs = require('fs');
const stream = require('stream');

const transform = stream.Transform({
    transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase());
        cb();
    }
});

transform.write('a');

console.log(transform.read(1).toString()); // A
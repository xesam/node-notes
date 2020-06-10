const b1 = new Buffer.alloc(1);
console.log(b1.write('a'));
console.log(b1.write('中'));

const b2 = new Buffer.alloc(3);
console.log(b2.write('a'));
console.log(b2.write('中'));

const b3 = new Buffer.alloc(5);
b3.write('aaaaa');
console.log(b3);
b3.write('b', 1);
console.log(b3);
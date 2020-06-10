exports.hello = function () {
    console.log('hello index.js');
}

if (require.main === module) {
    console.log('run from index.js');
    Object.entries(module).forEach(([key, value]) => {
        console.log(`${key}=${value}`);
    });
}
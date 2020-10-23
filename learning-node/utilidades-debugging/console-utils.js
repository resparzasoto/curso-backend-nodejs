// console.log("Un %s y un %s", "dog", "cat");

// console.info('Hello world');
// console.warn('Hello error');

// console.assert(42 === "42");

// console.trace('Hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Hello from foo');

// %s - String
//%d - Number
//%i - parseInt(value, 10)
//%f - parseFloat(value)
//%j - JSON
//%o - Object
//%c - Css
//%% - signo de '%'
// console.log("Un %s y un %s", "perrito", "gatito");

// console.info("hello world");
// console.warn("hello error");

// console.assert(42 == "42");
// console.assert(42 === "42");

// console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("hello from foo");
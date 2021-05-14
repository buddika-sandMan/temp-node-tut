// CommonJS, every file is module (by default)
// Module - Encapsulated Code (only share minimu)
const names = require('./2-names');
const sayHi = require('./3-utils');
const data = require('./5-alternative-flavor');

sayHi('susan');
sayHi(names.jhon);
sayHi(names.peter);
console.log(data);

require('./6-mind-granade');
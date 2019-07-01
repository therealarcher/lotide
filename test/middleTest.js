const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

// TEST CODE
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,7]), [3]);
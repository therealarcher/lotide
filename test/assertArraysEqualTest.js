const assertArraysEqual = require('../assertArraysEqual.js');
//const eqArrays = require('../eqArrays.js');

// TEST CODE
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2], [1,2,3,4]);
assertArraysEqual([1,2], [1,"2"]);
assertArraysEqual([],[1]);
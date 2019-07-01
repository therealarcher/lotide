const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1,2,3], [3,2,1]), false);
assertEqual(eqArrays([1,2,3], [1,2,4,5]), false);
assertEqual(eqArrays([], [1,2,4,5]), false);
assertEqual(eqArrays([], []), true);
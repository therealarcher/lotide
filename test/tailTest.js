const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const empty = [];
tail(empty);
assertEqual(empty.length, 0);

const single = [234];
tail(single);
assertEqual(single.length, 1);
const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Elephants", "And", "Dogs", "Grow", "Big", "Ears"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]); // replaces each element of words with their first character
// console.log(map());

const results2 = map(words2, word => word[0]);

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ The arrays [${array1}] and [${array2}] are equal.`);
  } else {
    console.log(`🛑🛑🛑 the arrays [${array1}]  and [${array2}] are not equal.`);
  }
};
// TEST CASES

assertArraysEqual(results1, ['g','c','t','m','t']);
assertArraysEqual(results2, ['E', 'A', 'D', 'G', 'B', 'E']);
assertArraysEqual(results2, ['E', 'A', 'D', 'G', 'B', 'e']);
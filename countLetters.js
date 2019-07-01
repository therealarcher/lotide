const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  let noSpace = string.split(' ').join('');
  for (const letter of noSpace) {
    //console.log(letter);
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  console.log(results);
  return results;
};

//console.log(countLetters("lighthouse in the house"));

/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, "5");
assertEqual("Hello", "hello");
*/
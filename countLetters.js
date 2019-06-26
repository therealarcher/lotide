const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  results = {};
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
}

result1 = countLetters("lighthouse in the house")

/*
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, "5");
assertEqual("Hello", "hello");
*/
let findKey = function(object, callback) {
  for (let name in object) {
    if (callback(object[name])) {
      return name;
    }
  }
};

let ratings = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


findKey(ratings, x => x.stars === 2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey(ratings, x => x.stars === 2), 'noma');
assertEqual(findKey(ratings, x => x.stars === 3), 'noma');
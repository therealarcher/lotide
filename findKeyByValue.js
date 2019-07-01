const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function which takes in an object and a value.  It should scan the object and return
// the first key which contains the given value. If no key with that given value is found,
// then it should return undefined.

// PSEUDOCODE
// loop object - for of
// when value === value of something in object, return object.key
// if value not found in object keys, return "undefined"

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(object, value) {
  //console.log(Object.keys(object));
  for (let genre in object) {
    // console.log (genre);
    // console.log(object[genre]);
    if (object[genre] === value) {
      //console.log(genre);
      return genre;
    }
  }
};


findKeyByValue(bestTVShowsByGenre, "The Expanse");

// TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
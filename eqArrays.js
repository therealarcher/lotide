const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// check each element of the same index between 2 arrays


let eqArrays = function (array1, array2) {
  
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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"), false;
assertEqual(1, 1), true;
assertEqual(5, "5"), false;
assertEqual("Hello", "hello"), false;
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1,2,3], [3,2,1]), false);
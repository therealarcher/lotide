// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
 
// PSEUDOCODE
// check for same number of keys
// check that the keys are the same for identical keys in each object
// Object.keys(object).length gives the length of the object


const eqObjects = function(object1, object2) {
  // console.log(Object.keys(object1).length);
  // console.log(Object.keys(object2).length);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // primitive value, use ===
  // if key can be object, use eqObjects (recursively)
  // if key is array (assume that elements are primitive), compare length and values using ===

  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      // if key values identify as false it could still be an array
      if (Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
        return false;
      }

      if (!eqArrays(object1[key] , object2[key])) {
        return false;
      }
    }
  }

  return true;
};

let eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    //console.log('not equal')
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        //console.log('not equal');
        return false;
      }
    }
  }
  //console.log('equal');
  return true;
};

// FUNCTION IMPLEMENTATION *******************************
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    console.log(`✅✅✅ The objects ${inspect(object1)} and ${inspect(object2)} are equal.`);
  } else {
    console.log(`🛑🛑🛑 the arrays ${inspect(object1)} and ${inspect(object2)} are not equal.`);
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false





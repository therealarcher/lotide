
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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1,2,3], [3,2,1]), false);
assertEqual(eqArrays([1,2,3], [1,2,4,5]), false);
assertEqual(eqArrays([], [1,2,4,5]), false);
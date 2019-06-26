
let eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log('The two arrays are not equal.')
      return false;
    } 
  }
  console.log('The two arrays are equal.')
  return true;
};

let assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
}

// TEST CODE
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
assertArraysEqual([1,2], [1,2,3,4]);
assertArraysEqual([],[1]);
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    //console.log('not equal')
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //console.log('not equal')
      return false;
    }
  }
  //console.log('equal')
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ The arrays [${array1}] and [${array2}] are equal.`);
  } else {
    console.log(`🛑🛑🛑 the arrays [${array1}]  and [${array2}] are not equal.`);
  }
};

// a function that will take in an array of arrays and return a "flattened" version of the array
const flatten = function(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (!Array.isArray(arrays[i])) {
      newArray.push(arrays[i]);
    } else {
      for (let j = 0; j < arrays[i][j]; j++) {
        newArray.push(arrays[i][j]);
      }
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5], 5, 6, [6]]), [1, 2, 3, 4, 5, 5, 6, 6]);
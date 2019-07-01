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


//function to find the middle element(s) of an array.

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let evenIndexStart = (array.length / 2 - 1);
    let evenIndexEnd = (array.length / 2);
    return [array[evenIndexStart], array[evenIndexEnd]];
  } else {
    let middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  }
};


// middle([1,2,3,4]);
// middle([1,2,3,4,5,6]);
// middle([1,3,5,7,9]);

module.exports = middle;

// // TEST CODE
// assertArraysEqual(middle([1,2,3,4]), [2,3]);
// assertArraysEqual(middle([1,2,3,4,7]), [3]);

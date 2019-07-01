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

module.exports = assertArraysEqual;

// TEST CODE
// eqArrays(assertArraysEqual([1,2,3], [1,2,3]), true);
// eqArrays([1,2,3], [2,2,3,4]);
// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,2], [1,2,3,4]);
// assertArraysEqual([],[1]);

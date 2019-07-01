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

// function that will return a subset of a given array, removing unwanted elements.
// if item in items to remove is in source, do nothing
//  if it's not in the source, add to newArray

let without = function(source, itemsToRemove) {
  let newArray = [];
  for (let s = 0; s < source.length; s++) { // s = 0
    let noPush = false;
    // source[s] = 3
    //console.log("index is:", itemsToRemove[i])
    for (let i = 0; i < itemsToRemove.length; i++) { // i = 0
      // 3 === 1
      if (source[s] === itemsToRemove[i]) {
        noPush = true;
        //newArray.push(source[s]);
        // equal = true;
      }
    }
    if (noPush === false) {
      newArray.push(source[s])
    }
  }
  return newArray;
};

//let source = [1,2,3];
//let itemsToRemove = [1];

let source = [1,2,3,4,5]
let itemsToRemove = [1,3,5]
console.log('test', without(source,itemsToRemove));


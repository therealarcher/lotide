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

// letterPositions will return all the indices (zero-based positions) in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  noSpaces = sentence.split(' ').join('');
  for (let i = 0; i < noSpaces.length; i++) {
    let char = noSpaces[i];
    if (!results[char]) {
      results[char] = [i];
    } else {
      results[char].push(i);
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
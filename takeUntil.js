// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
// returns an array

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    //console.log(item);
    //console.log(callback(item));
    //results = array.filter(callback);
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  console.log(results);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
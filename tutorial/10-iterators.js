"use strict";

function createRange(start, end) {
  let current = start;
  const range = {};
  // A zero arguments function
  range[Symbol.iterator] = function() {
    // Returns an object
    return {
      // has .next() method.
      next() {
        const done = (end < current) ? true : false;
        const value = (done) ? undefined : current++;
        return {
          value, // value property
          done,  // done property
        };
      }
    };
  };
  return range;
}

var range = createRange(1, 4);

for(let n of range){
  console.log(n); // 1, 2, 3, 4
}
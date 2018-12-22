/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

var moveZeros = function(arr) {
  let midpoint = [];
  let nonzero = [];
  let final = [];
  arr.map(e => {
    if (e === 0) {
      midpoint.push(e);
    } else {
      nonzero.push(e);
    }
  });
  final = nonzero.concat(midpoint);
  return final;
};

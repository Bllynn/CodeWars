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

var isSquare = function(n) {
  var check = Math.sqrt(n);
  if (Number.isInteger(check)) {
    return true;
  } else {
    return false;
  }
};

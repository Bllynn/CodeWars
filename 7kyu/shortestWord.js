function findShort(s) {
  var longestWord = s.split(" ").sort(function(a, b) {
    return a.length - b.length;
  });
  return longestWord[0].length;
}

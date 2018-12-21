function highAndLow(numbers) {
  // console.log(numbers.split(' '))
  let sorted = numbers.split(" ").sort(function(a, b) {
    return parseInt(a) - parseInt(b);
  });
  console.log(sorted);
  return sorted[sorted.length - 1] + " " + sorted[0];
}

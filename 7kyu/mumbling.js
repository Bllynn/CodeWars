function accum(s) {
  answer = "";
  stringSplit = s.split("");
  console.log(stringSplit);
  stringSplit.forEach(function(e, i) {
    if (i === stringSplit.length - 1) {
      answer = answer + e.toUpperCase() + `${e.repeat(i).toLowerCase()}`;
    } else {
      answer = answer + e.toUpperCase() + `${e.repeat(i).toLowerCase()}-`;
    }
  });
  return answer;
}

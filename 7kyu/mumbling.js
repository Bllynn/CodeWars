/*This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/
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

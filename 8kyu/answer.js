/*Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString(str) {
  var patt1 = /[0-9]/g;
  var name = /[a-zA-Z]/g;
  var number = str.match(patt1) ? str.match(patt1).join("") : "";
  var nameResult = str.match(name) ? str.match(name).join("") : "";
  var addone = Number(number) + 1;
  if (addone.toString().length >= number.length) {
    var answer = nameResult + addone;
  } else {
    while (number.length > addone.toString().length) {
      addone = 0 + addone.toString();
      var answer = nameResult + addone;
    }
  }
  return answer;
}

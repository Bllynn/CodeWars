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

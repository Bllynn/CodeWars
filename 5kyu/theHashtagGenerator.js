function generateHashtag(str) {
  let answer = "#";
  if (str === "" || str.length === 0) {
    return false;
  }
  str.split(" ").map(e => {
    if (e == " ") {
    } else if (e != " ") {
      answer = answer + e.charAt(0).toUpperCase() + e.slice(1, e.length);
    }
  });
  if (answer.length > 140 || answer === "#") {
    return false;
  } else {
    return answer;
  }
}

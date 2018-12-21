function list(names) {
  let name = names.map(e => e.name);
  let answer = "";
  if (name.length >= 2) {
    for (i = 0; i <= name.length - 3; i++) {
      answer = answer + `${name[i]}, `;
    }
    return answer + `${name[name.length - 2]} & ${name[name.length - 1]}`;
  } else if (name.length === 1) {
    answer = `${name[0]}`;
    return answer;
  }
  return answer;
}

/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/
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

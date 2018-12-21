var likes = names => {
  for (i = 0; i < names.length; i++) {
    if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 1) {
      return `${names} likes this`;
    }
  }
  return "no one likes this";
};

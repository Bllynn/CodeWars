function DNAStrand(dna) {
  const A = "A",
    T = "T",
    C = "C",
    G = "G";
  var compliment = [];
  var comma = /,/gi;
  for (i = 0; i < dna.length; i++)
    switch (dna[i]) {
      case A:
        compliment.push("T");
        break;
      case T:
        compliment.push("A");
        break;
      case G:
        compliment.push("C");
        break;
      case C:
        compliment.push("G");
        break;
      default:
        return compliment;
    }
  return compliment.toString().replace(comma, "");
}

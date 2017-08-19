
function dnaComplement (dna) {
  let newDnaString = [];
  let dnaString = dna.split("");
  if(dna === "") {
    return "''";
  }
  for(var i = 0; i < dnaString.length; i++) {
    switch(dnaString[i]) {
      case 'A':
        newDnaString.push('T');
        break;
      case 'T':
        newDnaString.push('A');
        break;
      case 'C':
        newDnaString.push('G');
        break;
      case 'G':
        newDnaString.push('C');
        break;
      default:
        text = "You need to input the nucleotides of the DNA.";
    }
  }
  return newDnaString.join("");
}

module.exports = dnaComplement;




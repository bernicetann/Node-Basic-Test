// You have function with one side of the DNA, you need to get the other complementary side.
// The DNA strand may be empty if there is no DNA at all. In this case, you can simple return
// the empty string.

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

console.log(dnaComplement("ATTGC"));


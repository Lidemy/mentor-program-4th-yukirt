function compare(a, b, moreOrLess) {
  if (a === b) return 'DRAW';
  let A = a;
  let B = b;
  if (moreOrLess === -1) {
    A = b;
    B = a;
  }
  const lengthA = A.length;
  const lengthB = B.length;

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  return A > B ? 'A' : 'B';
}

console.log(compare(1, 2, 1));
console.log(compare(1, 2, -1));
console.log(compare(2, 2, 1));

function printFactor(n) {
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

printFactor(10);
printFactor(7);
printFactor(12);

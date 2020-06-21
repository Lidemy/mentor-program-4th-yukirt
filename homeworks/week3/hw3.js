function isPrime(num) {
  if (num === 1) {
    return 'Composite';
  }
  const root = Math.sqrt(num);
  for (let i = 2; i <= root; i += 1) {
    if (num % i === 0) {
      return 'Composite';
    }
  }
  return 'Prime';
}


function input(list) {
  for (let i = 1; i < list.length; i += 1) {
    console.log(isPrime(Number(list[i])));
  }
}

input(['5', '1', '2', '3', '4', '5']);
input(['6', '9997', '9999', '222', '173', '47', '3']);

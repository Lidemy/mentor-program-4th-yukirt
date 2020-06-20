function checkNarcissistic(num) {
  let total = 0;
  const { length } = num.toString(10);
  // console.log(length)
  for (let i = 0; i < length; i += 1) {
    total += parseInt(num.toString(10)[i], 10) ** length;
  }
  if (total === num) {
    return true;
  }
  return false;
}

function narcissisticNumber(num1, num2) {
  for (let i = num1; i <= num2; i += 1) {
    if (checkNarcissistic(i)) {
      console.log(i);
    }
  }
}

narcissisticNumber(5, 200);

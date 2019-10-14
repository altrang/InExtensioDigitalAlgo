const getIncrementedNumber = (digitArray, position) => {
  if (position < 0) {
    return digitArray;
  }
  digitArray[position]++;
  if (digitArray[position] === 10) {
    digitArray[position] = 0;
    if (position !== 0) {
      getIncrementedNumber(digitArray, position - 1);
    } else {
      digitArray.unshift(1);
    }
  }
  return digitArray;
};

const incrementArray = digitsArray => {
  const lastDigit = getIncrementedNumber(digitsArray, digitsArray.length - 1);
  return lastDigit;
};

incrementArray([1, 9]);

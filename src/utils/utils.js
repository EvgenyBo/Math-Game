export const getTwoRandomNumbers = operation => {
  let numberOne = 0;
  let numberTwo = 0;
  let ans = 0;
  switch (operation) {
    case '+':
      numberOne = randomIntFromInterval(2, 100);
      numberTwo = randomIntFromInterval(2, 100);
      ans = numberOne + numberTwo;
      break;
    case '-':
      ans = randomIntFromInterval(2, 100);
      numberTwo = randomIntFromInterval(2, 100);
      numberOne = ans + numberTwo;
      break;
    case 'X':
      numberOne = randomIntFromInterval(2, 12);
      numberTwo = randomIntFromInterval(2, 100);
      ans = numberOne * numberTwo;
      break;
    case '/':
      ans = randomIntFromInterval(2, 100);
      numberTwo = randomIntFromInterval(2, 12);
      numberOne = ans * numberTwo;
      break;
  }
  return {
    numberOne,
    numberTwo,
    ans,
  };
};

const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

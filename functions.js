function capatilize(value) {
  const stringToCapatalize = value.trim();
  return stringToCapatalize[0].toUpperCase() + stringToCapatalize.substring(1);
}

function reverseString(value) {
  const stringToReverse = value.trim();
  let reversedString = '';
  let i = stringToReverse.length - 1;
  while (i >= 0) {
    reversedString += stringToReverse[i];
    i -= 1;
  }
  return reversedString;
}

const Calculator = (() => {
  const add = (num1, num2) => {
    const result = num1 + num2;
    return Number(result);
  };

  const subtract = (num1, num2) => {
    const result = num1 - num2;
    return Number(result);
  };

  const divide = (num1, num2) => {
    const result = num1 / num2;
    return Number(result);
  };

  const multiply = (num1, num2) => {
    const result = num1 * num2;
    return Number(result);
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

module.exports = {
  capatilize,
  reverseString,
  Calculator,
};

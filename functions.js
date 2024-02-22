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

/**
 * alphapet used is ASCII values 32(Space) till 126(~ tilde)
 */
function ceasarCipher(string, shiftFactor) {
  const startAscii = 32;
  const endAscii = 126;
  const stringToCipher = string;
  let encryptedString = '';
  for (let i = 0; i < stringToCipher.length; i += 1) {
    let asciiValue = stringToCipher[i].charCodeAt(0);
    asciiValue = (asciiValue + shiftFactor) % endAscii;
    if (asciiValue < startAscii) {
      asciiValue += startAscii - 1;
    }
    encryptedString += String.fromCharCode(asciiValue);
  }
  return encryptedString;
}

module.exports = {
  capatilize,
  reverseString,
  Calculator,
  ceasarCipher,
};
